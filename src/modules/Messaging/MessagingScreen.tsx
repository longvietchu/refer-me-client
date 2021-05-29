import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Widgets from '../../common/components/widgets/Widgets';
import MessagesList from './MessagesList/MessagesList';
import Header from '../../common/components/header/Header';
import Room from './room/Room';

import { Helmet } from 'react-helmet';

import Styles from './Style';

interface MessageData {
    text: string;
    user: string;
}

interface MessageListData {
    id: string;
    data: MessageData;
}

const MessagingScreen = () => {
    const classes = Styles();

    // const [sender, setSender] = React.useState<string>("");
    // const [messages, setMessages] = React.useState<MessageListData[]>([]);

    return (
        <Grid className={classes.app}>
            <Helmet>
                <title>Messaging | RefMe</title>
            </Helmet>
            <Grid item container className={classes.app__header}>
                {/* Header */}
                <Header />
            </Grid>

            <Grid item container className={classes.app__body}>
                <Hidden smDown>
                    <Grid item className={classes.body__sidebar} xs>
                        <Room />
                    </Grid>
                </Hidden>

                <Grid item className={classes.body__feed} xs={12} md={5}>
                    <Grid item className={classes.feed__posts}>
                        <MessagesList />
                    </Grid>
                </Grid>

                <Hidden smDown>
                    <Grid item className={classes.body__widgets} xs>
                        <Widgets />
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default MessagingScreen;
