import {
    Avatar,
    ButtonBase,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    Paper
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useState } from 'react';
import * as images from '../../../assets/images/images';
import { IUserInfo } from '../../../constants/CommonInterface';
import { numberUtil } from '../../../utils/NumberUtil';
import Comments from './components/Comments';
import Style from './Style';

interface props {
    user_info: IUserInfo;
    updated_at: string;
    description: string;
    post_image: string[];
    reactions: object[];
}

const PostItem = (props: props) => {
    const classes = Style();

    const { user_info, updated_at, description, post_image, reactions } = props;

    const [likesCount, setLikesCount] = useState(1);
    const [commentsCount, setCommentsCount] = useState(1);
    const [heartIcontOrder, setHeartIcontOrder] = useState(1);
    const [smileIconOrder, setSmileIconOrder] = useState(1);
    const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

    const [showComment, setShowComment] = useState(false);

    return (
        <PopupState variant="popover" popupId="demoMenu">
            {(popupState) => (
                <div>
                    <Paper className={classes.post}>
                        <div className={classes.post__header}>
                            <Avatar src={user_info.avatar} />
                            <div className={classes.header__info}>
                                <h4>{user_info.name}</h4>
                                <p>
                                    {numberUtil.convertUtcToDateTime(
                                        updated_at
                                    )}
                                </p>
                            </div>
                            <ButtonBase {...bindTrigger(popupState)}>
                                <MoreHorizOutlinedIcon />
                            </ButtonBase>
                        </div>
                        <div className={classes.post__body}>
                            <div className={classes.body__description}>
                                <p>{description}</p>
                            </div>
                            <div className={classes.body__image}>
                                {post_image.map((image) => (
                                    <img src={image} alt="post" />
                                ))}
                            </div>
                        </div>
                        <div className={classes.post__footer}>
                            <div className={classes.footer__stats}>
                                <div>
                                    <img
                                        src={images.LinkedInLike}
                                        alt="linked-in-reaction-1"
                                    />
                                </div>
                                <h4>{reactions.length}</h4>
                            </div>
                            <div className={classes.footer__actions}>
                                <div className={classes.action__icons}>
                                    <ThumbUpAltOutlinedIcon
                                        style={{ transform: 'scaleX(-1)' }}
                                    />
                                    <h4>Like</h4>
                                </div>
                                <div
                                    className={classes.action__icons}
                                    onClick={() =>
                                        setShowComment(!showComment)
                                    }>
                                    <CommentOutlinedIcon />
                                    <h4>Comment</h4>
                                </div>

                                <div className={classes.action__icons}>
                                    <ReplyOutlinedIcon
                                        style={{ transform: 'scaleX(-1)' }}
                                    />
                                    <h4>Share</h4>
                                </div>
                                <div className={classes.action__icons}>
                                    <SendIcon
                                        style={{ transform: 'rotate(-45deg)' }}
                                    />
                                    <h4>Send</h4>
                                </div>
                            </div>
                            {showComment && <Comments />}
                        </div>
                    </Paper>
                    <Menu
                        {...bindMenu(popupState)}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        // className={classes.menu}
                    >
                        <ListItem button onClick={popupState.close}>
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText>Edit</ListItemText>
                        </ListItem>
                        <ListItem button onClick={popupState.close}>
                            <ListItemIcon>
                                <Delete />
                            </ListItemIcon>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                    </Menu>
                </div>
            )}
        </PopupState>
    );
};

export default PostItem;
