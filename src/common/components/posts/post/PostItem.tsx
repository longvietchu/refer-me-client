import {
    Avatar,
    ButtonBase,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    Paper,
    Divider
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { homeStore, IPost } from '../../../../modules/Home/homeStore';
import { loginStore } from '../../../../modules/Login/loginStore';
import * as images from '../../../assets/images/images';
import { numberUtil } from '../../../utils/NumberUtil';
import Comments from './components/Comments';
import Style from './Style';

interface IProps {
    post: IPost;
}

const PostItem = observer((props: IProps) => {
    const classes = Style();
    // useEffect(() => {
    //     post.reactions.map((react) => {
    //         if (
    //             loginStore.userInfo &&
    //             react.user_id === loginStore.userInfo.id
    //         ) {
    //             setIsLiked(true);
    //         }
    //     });
    // }, [isLiked]);
    // const [isLiked, setIsLiked] = useState(false);
    const checkLiked = () => {
        let isLiked = false;
        post.reactions.map((react) => {
            if (
                loginStore.userInfo &&
                react.user_id === loginStore.userInfo.id
            ) {
                isLiked = true;
            }
        });
        return isLiked;
    };
    const { post } = props;
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'postMenu'
    });

    const [showComment, setShowComment] = useState(false);

    return (
        <div key={post._id}>
            <Paper className={classes.post}>
                <div className={classes.post__header}>
                    <Avatar src={post.user_info.avatar} />
                    <div className={classes.header__info}>
                        <h4>{post.user_info.name}</h4>
                        <p>
                            {numberUtil.convertUtcToDateTime(post.updated_at)}
                        </p>
                    </div>
                    <ButtonBase {...bindTrigger(popupState)}>
                        <MoreHorizOutlinedIcon />
                    </ButtonBase>
                </div>
                <div className={classes.post__body}>
                    <div className={classes.body__description}>
                        <p>{post.description}</p>
                    </div>
                    <div className={classes.body__image}>
                        {post.post_image.map((image) => (
                            <img src={image} alt={post.description} />
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
                        <h4>{post.reactions.length}</h4>
                    </div>
                    <div className={classes.footer__actions}>
                        <div
                            className={classes.action__icons}
                            onClick={() => {
                                homeStore.createReaction(post._id);
                            }}>
                            <ThumbUpAltOutlinedIcon
                                className={
                                    checkLiked()
                                        ? classes.likeIconActive
                                        : classes.likeIcon
                                }
                            />
                            <h4
                                className={
                                    checkLiked()
                                        ? classes.likeTxtActive
                                        : classes.likeTxt
                                }>
                                {checkLiked() ? 'Liked' : 'Like'}
                            </h4>
                        </div>
                        <div
                            className={classes.action__icons}
                            onClick={() => {
                                setShowComment(!showComment);
                                homeStore.getComment(post._id);
                            }}>
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
                            <SendIcon style={{ transform: 'rotate(-45deg)' }} />
                            <h4>Send</h4>
                        </div>
                    </div>
                    <Divider />
                    {showComment && (
                        <Comments
                            commentList={post.comments}
                            post_id={post._id}
                        />
                    )}
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
    );
});

export default PostItem;
