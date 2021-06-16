import React from 'react';
import {
    Paper,
    List,
    ListSubheader,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Typography
} from '@material-ui/core';
import Footer from '../../../common/components/footer/Footer';
import { Group, PermContactCalendarOutlined } from '@material-ui/icons';
import Styles from './Style';
import { observer } from 'mobx-react-lite';
import { networkStore, NetworkTab } from '../networkStore';

const network1 = [
    {
        id: 0,
        icon: <PermContactCalendarOutlined />,
        title: 'Contacts',
        amount: '160'
    },
    { id: 1, icon: <Group />, title: 'Connections', amount: '10' }
];

const SideBar = observer(() => {
    const classes = Styles();
    return (
        <div className={classes.sidebar}>
            <Paper className={classes.root}>
                <List
                    component="nav"
                    aria-labelledby="manage my network"
                    subheader={
                        <ListSubheader
                            component="span"
                            color="inherit"
                            id="manage my network">
                            Manage my network
                        </ListSubheader>
                    }>
                    <ListItem
                        selected={
                            networkStore.networkTab === NetworkTab.CONTACT
                                ? true
                                : false
                        }
                        onClick={() =>
                            (networkStore.networkTab = NetworkTab.CONTACT)
                        }>
                        <ListItemIcon>
                            <PermContactCalendarOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        className={
                                            networkStore.networkTab ===
                                            NetworkTab.CONTACT
                                                ? classes.titleActive
                                                : classes.title
                                        }>
                                        Contacts
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <Typography className={classes.amount}>
                                {networkStore.invitationList &&
                                    networkStore.invitationList.length}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem
                        selected={
                            networkStore.networkTab === NetworkTab.CONNECTION
                                ? true
                                : false
                        }
                        onClick={() =>
                            (networkStore.networkTab = NetworkTab.CONNECTION)
                        }>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        className={
                                            networkStore.networkTab ===
                                            NetworkTab.CONNECTION
                                                ? classes.titleActive
                                                : classes.title
                                        }>
                                        Connections
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <Typography className={classes.amount}>
                                {networkStore.networkList &&
                                    networkStore.networkList.length}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
            <div className={classes.sidebar__bottom}>
                <Footer />
            </div>
        </div>
    );
});

export default SideBar;
