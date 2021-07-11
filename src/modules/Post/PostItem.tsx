import {
    Avatar,
    Button,
    ButtonBase,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Popover,
    Typography,
    ListItemAvatar
} from '@material-ui/core';
import {
    ThumbUpAltOutlined,
    ThumbUpAlt,
    ReplyOutlined,
    MoreHoriz,
    CommentOutlined,
    Delete,
    Edit
} from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { homeStore, IPost } from '../Home/homeStore';
import { loginStore } from '../Login/loginStore';
import * as images from '../../common/assets/images/images';
import { numberUtil } from '../../common/utils/NumberUtil';
import Style from './Style';
import './CustomCarousel.css';
import Comments from './components/Comments';
import LoadingCard from '../../common/components/util/LoadingCard';

interface IProps {
    post: IPost;
}

const PostItem = observer((props: IProps) => {
    const classes = Style();
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
    const [showComment, setShowComment] = useState(false);
    const [content, setContent] = useState('');

    // Post options
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const openPostOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closePostOption = () => {
        setAnchorEl(null);
    };
    const isOpenPostOptions = Boolean(anchorEl);
    const idPostOptions = isOpenPostOptions ? 'simple-popover' : undefined;

    // Comment options
    const [commentAnchorEl, setCommentAnchorEl] =
        React.useState<HTMLButtonElement | null>(null);
    const openCommentOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCommentAnchorEl(event.currentTarget);
    };
    const closeCommentOption = () => {
        setCommentAnchorEl(null);
    };
    const isOpenCommentOptions = Boolean(commentAnchorEl);
    const idCommentOptions = isOpenCommentOptions
        ? 'simple-popover'
        : undefined;

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
                    {loginStore.userInfo &&
                        loginStore.userInfo.id === post.user_id && (
                            <ButtonBase onClick={openPostOptions}>
                                <MoreHoriz />
                            </ButtonBase>
                        )}
                </div>
                <div className={classes.post__body}>
                    <div className={classes.body__description}>
                        <p>{post.description}</p>
                    </div>
                    <Carousel
                        autoPlay={false}
                        showThumbs={false}
                        showIndicators={false}
                        statusFormatter={(current, total) =>
                            `${current}/${total}`
                        }
                        showStatus={post.post_image.length > 1 ? true : false}
                        swipeable={true}
                        emulateTouch={true}>
                        {post.post_image.map((image, index) => (
                            <div className={classes.body__image} key={index}>
                                <img src={image} alt={post.description} />
                            </div>
                        ))}
                    </Carousel>
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
                                let isLiked = checkLiked();
                                homeStore.createReaction(post._id, isLiked);
                            }}>
                            {checkLiked() ? (
                                <ThumbUpAlt
                                    className={classes.likeIconActive}
                                />
                            ) : (
                                <ThumbUpAltOutlined
                                    className={classes.likeIcon}
                                />
                            )}
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
                            onClick={async () => {
                                await homeStore.getComment(post._id);
                                setShowComment(!showComment);
                            }}>
                            <CommentOutlined />
                            <h4>Comment</h4>
                        </div>

                        <div className={classes.action__icons}>
                            <ReplyOutlined
                                style={{ transform: 'scaleX(-1)' }}
                            />
                            <h4>Share</h4>
                        </div>
                        {/* <div className={classes.action__icons}>
                            <SendIcon style={{ transform: 'rotate(-45deg)' }} />
                            <h4>Send</h4>
                        </div> */}
                    </div>
                    <Divider />
                    {showComment && (
                        <>
                            <div className={classes.upload__header}>
                                {loginStore.userInfo && (
                                    <Avatar src={loginStore.userInfo.avatar} />
                                )}
                                <div className={classes.header__form}>
                                    <input
                                        placeholder="Add your comment"
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                homeStore.createComment(
                                                    post._id,
                                                    content
                                                );
                                                setContent('');
                                            }
                                        }}
                                    />
                                </div>
                                <Button
                                    variant="outlined"
                                    className={classes.post_button}
                                    onClick={() => {
                                        homeStore.createComment(
                                            post._id,
                                            content
                                        );
                                        setContent('');
                                    }}
                                    disabled={content === '' ? true : false}>
                                    Post
                                </Button>
                            </div>
                            <Divider />
                            {post.comments ? (
                                <div className={classes.all_comment}>
                                    <List dense={true} style={{ padding: 0 }}>
                                        {post.comments.map((item) => (
                                            <ListItem
                                                alignItems="flex-start"
                                                key={item._id}>
                                                <ListItemAvatar
                                                    style={{
                                                        minWidth: 50,
                                                        marginTop: 0
                                                    }}>
                                                    <Avatar
                                                        src={
                                                            item.user_info
                                                                .avatar
                                                        }
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    style={{
                                                        margin: '0',
                                                        backgroundColor:
                                                            '#f2f2f2',
                                                        borderRadius: 8,
                                                        padding: 8
                                                    }}>
                                                    <div
                                                        className={
                                                            classes.headerComment
                                                        }>
                                                        <p
                                                            style={{
                                                                fontWeight:
                                                                    'bold',
                                                                width: '90%',
                                                                overflow:
                                                                    'hidden',
                                                                textOverflow:
                                                                    'ellipsis',
                                                                whiteSpace:
                                                                    'nowrap'
                                                            }}>
                                                            {
                                                                item.user_info
                                                                    .name
                                                            }
                                                        </p>
                                                        <div className="action-container">
                                                            <p
                                                                style={{
                                                                    fontSize:
                                                                        '12px',
                                                                    color: '#00000099'
                                                                }}>
                                                                {numberUtil.convertUtcToTime(
                                                                    item.updated_at
                                                                )}
                                                            </p>
                                                            <ButtonBase>
                                                                <ButtonBase
                                                                    onClick={
                                                                        openCommentOptions
                                                                    }>
                                                                    <MoreHoriz
                                                                        style={{
                                                                            height: 17
                                                                        }}
                                                                    />
                                                                </ButtonBase>
                                                            </ButtonBase>
                                                        </div>
                                                    </div>
                                                    <Typography variant="caption">
                                                        {item.content}
                                                    </Typography>
                                                </ListItemText>
                                                <Popover
                                                    id={idCommentOptions}
                                                    open={isOpenCommentOptions}
                                                    anchorEl={commentAnchorEl}
                                                    onClose={closeCommentOption}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'right'
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right'
                                                    }}
                                                    className={classes.postMenu}
                                                    PaperProps={{
                                                        elevation: 0,
                                                        style: {
                                                            borderRadius: 10,
                                                            justifyContent:
                                                                'center',
                                                            alignItems: 'center'
                                                        }
                                                    }}>
                                                    <ListItem button>
                                                        <ListItemText>
                                                            Edit
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText>
                                                            Delete
                                                        </ListItemText>
                                                    </ListItem>
                                                </Popover>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            ) : (
                                <LoadingCard />
                            )}
                        </>
                    )}
                </div>
            </Paper>
            <Popover
                id={idPostOptions}
                open={isOpenPostOptions}
                anchorEl={anchorEl}
                onClose={closePostOption}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className={classes.postMenu}
                PaperProps={{
                    style: {
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}>
                <ListItem
                    button
                    onClick={() => {
                        homeStore.selectedPost = post;
                        homeStore.modalPost.edit = true;
                        closePostOption();
                    }}>
                    <ListItemIcon>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        homeStore.selectedPost = post;
                        homeStore.modalPost.delete = true;
                        closePostOption();
                    }}>
                    <ListItemIcon>
                        <Delete />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </ListItem>
            </Popover>
        </div>
    );
});

export default PostItem;
