import {
    Avatar,
    Divider,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Typography
} from '@material-ui/core';
import { SendRounded } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
    usePopupState,
    bindTrigger,
    bindMenu
} from 'material-ui-popup-state/hooks';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';
import { loginStore } from '../../Login/loginStore';
import { messageEvent } from '../messageEvent';
import { messageStore } from '../messageStore';
import Styles from './Style';

const MessagesList = observer(() => {
    const classes = Styles();
    const messagesEndRef = useRef(null);
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoMenu'
    });

    const scrollToBottom = () => {
        // @ts-ignore
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messageStore.messageList]);

    const handleSendMessage = (e: any) => {
        messageStore.messageContent = messageStore.messageContent.trim();
        if (messageStore.messageContent === '') return;
        let data = {};
        if (loginStore.userInfo && messageStore.selectedRoom) {
            let userId = loginStore.userInfo.id;
            data = {
                room_id: messageStore.selectedRoom._id,
                from: userId,
                to: messageStore.selectedRoom.user_info._id,
                type: 'TEXT',
                content: messageStore.messageContent
            };
        }
        messageEvent.emitMessage(data);
        messageStore.messageContent = '';
    };
    const emitSeenMessage = () => {
        if (loginStore.userInfo && messageStore.messageList) {
            const lastMessage = messageStore.messageList[0];
            if (lastMessage.to === loginStore.userInfo.id) {
                const data = {
                    room_id: lastMessage.room_id,
                    to: lastMessage.to,
                    from: lastMessage.from,
                    last_message_created_at: lastMessage.created_at
                };
                messageEvent.emitSeen(data);
            }
        }
    };

    const renderDate = (item: any, index: number, data: any) => {
        const dateComponent = (
            <div className={classes.date}>
                {numberUtil.convertUtcToDateTime(item.created_at)}
            </div>
        );
        const lastIndex = data.length - 1;
        if (index === lastIndex) {
            return dateComponent;
        } else {
            const lastDate = new Date(data[index + 1].createdAt).getTime();
            const currentDate = new Date(item.createdAt).getTime();
            const diff = new Date(currentDate - lastDate).getMinutes();
            if (diff > 10) {
                return dateComponent;
            }
        }
    };

    return (
        <div>
            <Paper>
                <List dense={true} style={{ padding: 0 }}>
                    <ListItem>
                        <ListItemText
                            style={{ margin: 0, display: 'flex' }}
                            primary={
                                <div
                                    style={{
                                        marginRight: 8
                                    }}>
                                    <Avatar alt="" src="" />
                                </div>
                            }
                            secondary={
                                <div
                                    style={{
                                        width: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                    <Typography>
                                        {messageStore.selectedRoom &&
                                            messageStore.selectedRoom.user_info
                                                .name}
                                    </Typography>
                                    <FiberManualRecordIcon
                                        style={{
                                            color: 'green',
                                            fontSize: '10px'
                                        }}
                                    />
                                    <Typography
                                        variant="caption"
                                        style={{ paddingLeft: 5 }}>
                                        Active
                                    </Typography>
                                </div>
                            }
                        />

                        <ListItemSecondaryAction>
                            <IconButton {...bindTrigger(popupState)}>
                                <MoreHorizIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>

                <Divider />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '65vh',
                        maxHeight: '65vh',
                        overflowY: 'scroll'
                    }}>
                    <div className={classes.messageBody}>
                        {messageStore.messageList ? (
                            messageStore.messageList.map((item, i) => (
                                <div
                                    className={classes.messageItem}
                                    key={item._id}>
                                    {renderDate(
                                        item,
                                        i,
                                        messageStore.messageList
                                    )}
                                    {loginStore.userInfo &&
                                    item.from === loginStore.userInfo.id ? (
                                        <div className={classes.senderMessage}>
                                            <div
                                                className={
                                                    classes.senderContent
                                                }>
                                                {item.content}
                                            </div>

                                            <div
                                                className={
                                                    classes.senderFooter
                                                }>
                                                <div className={classes.time}>
                                                    {numberUtil.convertUtcToTime(
                                                        item.created_at
                                                    )}
                                                </div>
                                                {item.is_seen && (
                                                    <CheckIcon
                                                        className={classes.tick}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className={
                                                classes.recipientMessage
                                            }>
                                            <div
                                                className={
                                                    classes.recipientContent
                                                }>
                                                {item.content}
                                            </div>
                                            <div
                                                className={
                                                    classes.recipientFooter
                                                }>
                                                <div className={classes.time}>
                                                    {numberUtil.convertUtcToTime(
                                                        item.created_at
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <LoadingCard />
                        )}
                    </div>
                    <div ref={messagesEndRef} />
                </div>
                <Divider />

                <div className={classes.chatFooter}>
                    <Input
                        className={classes.input}
                        onChange={(e) =>
                            (messageStore.messageContent = e.target.value)
                        }
                        onFocus={() => emitSeenMessage()}
                        value={messageStore.messageContent}
                        placeholder="Type a message..."
                    />
                    <IconButton
                        className={classes.chatButtonIcon}
                        type="submit"
                        disabled={
                            messageStore.messageContent === '' ? true : false
                        }
                        color="primary"
                        onClick={(e) => handleSendMessage(e)}>
                        <SendRounded />
                    </IconButton>
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
                className={classes.menu}>
                <MenuItem onClick={popupState.close}>Archive</MenuItem>
                <MenuItem onClick={popupState.close}>Delete</MenuItem>
                <MenuItem onClick={popupState.close}>Mark as unread</MenuItem>
                <MenuItem onClick={popupState.close}>Mute</MenuItem>
            </Menu>
        </div>
    );
});

export default MessagesList;
