import {
    Avatar,
    Button,
    ButtonBase,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Menu,
    Typography
} from '@material-ui/core';
import { Delete, Edit, MoreHoriz } from '@material-ui/icons';
import {
    bindMenu,
    bindTrigger,
    usePopupState
} from 'material-ui-popup-state/hooks';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';
import { homeStore, IComment } from '../../Home/homeStore';
import { loginStore } from '../../Login/loginStore';
import Styles from './Style';

interface IProps {
    post_id: string;
    commentList?: IComment[];
}

const Comments = observer((props: IProps) => {
    const classes = Styles();
    const [content, setContent] = useState('');
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'commentMenu'
    });
    const { commentList, post_id } = props;
    return (
        <>
            <div className={classes.upload__header}>
                {loginStore.userInfo && (
                    <Avatar src={loginStore.userInfo.avatar} />
                )}
                <div className={classes.header__form}>
                    <input
                        placeholder="Add your comment"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                homeStore.createComment(post_id, content);
                                setContent('');
                            }
                        }}
                    />
                </div>
                <Button
                    variant="outlined"
                    className={classes.post_button}
                    onClick={() => {
                        homeStore.createComment(post_id, content);
                        setContent('');
                    }}
                    disabled={content === '' ? true : false}>
                    Post
                </Button>
            </div>
            <Divider />
            {commentList ? (
                <div className={classes.all_comment}>
                    <List dense={true} style={{ padding: 0 }}>
                        {commentList.map((item) => (
                            <ListItem alignItems="flex-start" key={item._id}>
                                <ListItemAvatar
                                    style={{ minWidth: 50, marginTop: 0 }}>
                                    <Avatar src={item.user_info.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    style={{
                                        margin: '0',
                                        backgroundColor: '#f2f2f2',
                                        borderRadius: 8,
                                        padding: 8
                                    }}>
                                    <div className={classes.headerComment}>
                                        <p
                                            style={{
                                                fontWeight: 'bold',
                                                width: '90%',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>
                                            {item.user_info.name}
                                        </p>
                                        <div className="action-container">
                                            <p
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#00000099'
                                                }}>
                                                {numberUtil.convertUtcToTime(
                                                    item.updated_at
                                                )}
                                            </p>
                                            <ButtonBase>
                                                <MoreHoriz
                                                    {...bindTrigger(popupState)}
                                                    style={{ height: 17 }}
                                                />
                                            </ButtonBase>
                                        </div>
                                    </div>
                                    <Typography variant="caption">
                                        {item.content}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ) : (
                <LoadingCard />
            )}
            {/* <Menu
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
            </Menu> */}
        </>
    );
});

export default Comments;
