import { Avatar, Divider, Grid, Paper } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginStore } from '../../../../modules/Login/loginStore';
import {
    networkStore,
    NetworkTab
} from '../../../../modules/Network/networkStore';
import { profileStore } from '../../../../modules/Profile/profileStore';
import Style from './Style';

const SidebarTop = observer(() => {
    const classes = Style();
    let history = useHistory();

    // const onClick = (): void => {
    //     history.push('/mynetwork');
    // };
    return (
        <Paper className={classes.sidebar}>
            <div
                className={classes.cover}
                style={{
                    background:
                        profileStore.profile &&
                        profileStore.profile.background_image
                            ? `url(${profileStore.profile.background_image}) center center / cover no-repeat`
                            : 'url("/images/grey-network.jpg") center center / cover no-repeat',
                    backgroundSize: 'cover'
                }}></div>
            {loginStore.userInfo && (
                <div style={{ padding: '12px 12px 16px' }}>
                    <Link
                        to={`/profile/${loginStore.userInfo.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <Grid container direction="column" alignItems="center">
                            <Avatar
                                className={classes.avatar}
                                src={loginStore.userInfo.avatar}
                            />
                            <h4>{loginStore.userInfo.name}</h4>
                        </Grid>
                    </Link>
                    <p
                        style={{
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: '12px',
                            padding: '4px 8px'
                        }}>
                        {loginStore.userInfo.headline}
                    </p>
                </div>
            )}
            <div className={classes.stats}>
                <Divider />
                <Link to="/mynetwork" className={classes.stat}>
                    <h4>Invitation</h4>
                    <p>
                        {networkStore.invitationList &&
                            networkStore.invitationList.length}
                    </p>
                </Link>
                <div
                    className={classes.stat}
                    onClick={() => {
                        networkStore.networkTab = NetworkTab.CONNECTION;
                        history.push('/mynetwork');
                    }}>
                    <div>
                        <h4
                            style={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: 'grey'
                            }}>
                            Connections
                        </h4>
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>
                            Grown your connection
                        </span>
                    </div>
                    <p>
                        {networkStore.networkList &&
                            networkStore.networkList.length}
                    </p>
                </div>
                <Divider />
            </div>
            {/* <div className={classes.myItems}>
                <LabelImportantIcon style={{ transform: 'rotate(-90deg)' }} />
                <h4>My Items</h4>
            </div> */}
        </Paper>
    );
});

export default SidebarTop;
