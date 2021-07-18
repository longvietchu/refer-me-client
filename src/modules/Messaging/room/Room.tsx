import {
    Avatar,
    Divider,
    Grid,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import { observer } from 'mobx-react-lite';
import React from 'react';
import LoadingCard from '../../../common/components/util/LoadingCard';
import { numberUtil } from '../../../common/utils/NumberUtil';
import { messageStore } from '../messageStore';
import Styles from './Style';

const Room = observer(() => {
    const classes = Styles();

    const handleListItemClick = async (item: any) => {
        messageStore.selectedRoom = item;
        messageStore.messageList = undefined;
        await messageStore.getMessages();
    };

    const renderLastestMessage = (item: any) => {
        if (item.lastest_message) {
            if (item.lastest_message.from === item.user_info._id) {
                return (
                    <Typography
                        className={
                            item.lastest_message.is_seen
                                ? classes.typo
                                : classes.typoActive
                        }>
                        {item.lastest_message.content}
                    </Typography>
                );
            } else {
                return (
                    <Typography className={classes.typo}>
                        You: {item.lastest_message.content}
                    </Typography>
                );
            }
        }
    };
    return (
        <div className={classes.room}>
            <Paper className={classes.paper}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Typography
                        variant="body1"
                        style={{
                            padding: '0px 16px'
                        }}>
                        Messaging
                    </Typography>
                    <Grid item>
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container item>
                    <InputBase
                        className={classes.input}
                        placeholder="Search messages"
                        inputProps={{ 'aria-label': 'search messages' }}
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <List component="nav" className={classes.root}>
                    {messageStore.roomList ? (
                        messageStore.roomList.map((item, i) => (
                            <ListItem
                                key={item._id}
                                button
                                selected={
                                    messageStore.selectedRoom &&
                                    messageStore.selectedRoom._id === item._id
                                }
                                onClick={(event) => handleListItemClick(item)}
                                alignItems="center">
                                <Avatar
                                    src={item.user_info.avatar}
                                    className={classes.avatar}
                                />
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                style={{ display: 'inline' }}
                                                color="textPrimary">
                                                {item.user_info.name}
                                            </Typography>
                                            {renderLastestMessage(item)}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                style={{
                                                    fontSize: 12,
                                                    lineHeight: '14px'
                                                }}>
                                                {item.lastest_message &&
                                                    numberUtil.convertUtcToDate(
                                                        item.lastest_message
                                                            .created_at
                                                    )}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    style={{
                                        alignSelf: 'flex-start',
                                        flexGrow: 0
                                    }}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <LoadingCard />
                    )}
                </List>
            </Paper>
        </div>
    );
});

export default Room;
