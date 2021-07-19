import {
    Avatar,
    Badge,
    Button,
    CircularProgress,
    createStyles,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Popover,
    TextField,
    Typography,
    withStyles
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppsIcon from '@material-ui/icons/Apps';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import TelegramIcon from '@material-ui/icons/Telegram';
import WorkIcon from '@material-ui/icons/Work';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { jobStore } from '../../../modules/Job/jobStore';
import { loginStore } from '../../../modules/Login/loginStore';
import { networkStore } from '../../../modules/Network/networkStore';
import { organizationStore } from '../../../modules/Organization/organizationStore';
import { IOrganizationInfo } from '../../constants/CommonInterface';
import StorageService from '../../service/StorageService';
import MenuItems from './menuItem/MenuItem';
import Style from './Style';

const Header = observer(() => {
    const classes = Style();
    const [anchorEl, setAnchorEl] =
        React.useState<HTMLButtonElement | null>(null);
    let history = useHistory();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = () => {
        StorageService.removeToken();
        loginStore.userInfo = undefined;
        window.location.reload();
    };

    const onClickProfile = () => {
        if (loginStore.userInfo) {
            // await profileStore.getProfile(loginStore.userInfo.id);
            history.push(`/profile/${loginStore.userInfo.id}`);
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const StyledBadge = withStyles(() =>
        createStyles({
            badge: {
                right: 0,
                top: 8,
                padding: '0 6px',
                backgroundColor: '#cc1016',
                color: '#ffffff'
            }
        })
    )(Badge);

    const navbarItems = [
        {
            Icon: <HomeIcon />,
            title: 'Home',
            arrow: false,
            onClick: () => history.push('/home')
        },
        {
            Icon: (
                <StyledBadge
                    badgeContent={
                        networkStore.invitationList &&
                        networkStore.invitationList.length
                    }
                    invisible={
                        networkStore.invitationList &&
                        networkStore.invitationList.length > 0
                            ? false
                            : true
                    }>
                    <GroupIcon />
                </StyledBadge>
            ),
            title: 'My Network',
            arrow: false,
            onClick: () => history.push('/mynetwork')
        },
        {
            Icon: <WorkIcon />,
            title: 'Jobs',
            arrow: false,
            onClick: () => history.push('/jobs')
        },
        {
            Icon: (
                <StyledBadge badgeContent={0} invisible={true}>
                    <TelegramIcon />
                </StyledBadge>
            ),
            title: 'Messaging',
            arrow: false,
            onClick: () => history.push('/messaging')
        },
        {
            Icon: <NotificationsIcon />,
            title: 'Notifications',
            arrow: false,
            onClick: () => history.push('/notifications')
        },
        {
            Icon:
                loginStore.userInfo && loginStore.userInfo.avatar ? (
                    <Avatar
                        className={classes.avatar}
                        src={loginStore.userInfo.avatar}
                    />
                ) : (
                    <Avatar
                        className={classes.avatar}
                        src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
                    />
                ),
            title: 'Me',
            arrow: true,
            onClick: handleClick
        }
        // { Icon: <AppsIcon />, title: 'Works', arrow: true }
    ];

    const bottomItems = [
        { Icon: <HomeIcon />, title: 'Home', arrow: false },
        { Icon: <GroupIcon />, title: 'My Network', arrow: false },
        { Icon: <AddBoxIcon />, title: 'Add Post', arrow: false },
        {
            Icon: <NotificationsIcon />,
            title: 'Notifications',
            arrow: false,
            onClick: () => history.push('/notifications')
        },
        { Icon: <WorkIcon />, title: 'Jobs', arrow: false }
    ];

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.header}>
                <div className={classes.header__container}>
                    <div className={classes.header__logo}>
                        <img
                            src="/rfm-icon.png"
                            alt="logo"
                            onClick={() => history.push('/home')}
                        />
                        {/* <div className={classes.search}>
                            <SearchIcon />
                            <input placeholder="Search" />
                        </div>
                        <Avatar
                            className={classes.avatar}
                            src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/121083834_1699921320175513_6807580545774400741_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hfVRPKiVyaAAX-_QYhQ&_nc_ht=scontent.fhan4-1.fna&oh=fb6798aedb06700257a6b62a9815e721&oe=608BA140"
                        /> */}

                        <Autocomplete
                            freeSolo
                            className={classes.search}
                            id="input-company"
                            onInputChange={(event, newInputValue) => {
                                jobStore.searchOrganization(newInputValue);
                                organizationStore.inputSearchOrg =
                                    newInputValue;
                            }}
                            inputValue={organizationStore.inputSearchOrg}
                            onChange={(
                                event: any,
                                newValue: string | IOrganizationInfo | null
                            ) => {
                                if (newValue) {
                                    const orgObject: any = toJS(newValue);
                                    // console.log('option: ', orgObject._id);
                                    // jobStore.inputJob.organization_id =
                                    //     orgObject._id;
                                    // if (orgObject._id) {
                                    //     history.push(
                                    //         `/organization/profile/${orgObject._id}`
                                    //     );
                                    // } else
                                    //     history.push(
                                    //         '/organization/unavailable'
                                    //     );
                                }
                            }}
                            options={
                                jobStore.searchResult as IOrganizationInfo[]
                            }
                            autoHighlight
                            getOptionLabel={(option) => option.name}
                            renderOption={(option) => (
                                <React.Fragment>
                                    <Link
                                        to={`/organization/profile/${option._id}`}
                                        className={classes.optionContainer}>
                                        <div>
                                            {option.avatar ? (
                                                <img
                                                    src={option.avatar}
                                                    className={
                                                        classes.organizationAvatar
                                                    }
                                                />
                                            ) : (
                                                <img
                                                    src="/images/no-avatar.png"
                                                    className={
                                                        classes.organizationAvatar
                                                    }
                                                />
                                            )}
                                        </div>
                                        <p>{option.name}</p>
                                    </Link>
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Search organization"
                                    InputProps={{
                                        ...params.InputProps,
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <React.Fragment>
                                                {jobStore.isSearching ? (
                                                    <CircularProgress
                                                        color="inherit"
                                                        size={20}
                                                    />
                                                ) : null}
                                            </React.Fragment>
                                        )
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className={classes.header__nav}>
                        {navbarItems.map(
                            ({ Icon, title, arrow, onClick }, i) => (
                                <MenuItems
                                    key={i}
                                    Icon={Icon}
                                    title={title}
                                    arrow={arrow}
                                    onClick={onClick}
                                />
                            )
                        )}
                    </div>
                    <Paper className={classes.header__bottom__nav}>
                        {bottomItems.map(
                            ({ Icon, title, arrow, onClick }, i) => (
                                <MenuItems
                                    key={i}
                                    Icon={Icon}
                                    title={title}
                                    arrow={arrow}
                                    onClick={onClick}
                                />
                            )
                        )}
                    </Paper>
                </div>
            </Paper>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                className={classes.menu}
                PaperProps={{
                    style: {
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}>
                {loginStore.userInfo ? (
                    <div>
                        <List style={{ padding: 0 }}>
                            <ListItem
                                alignItems="flex-start"
                                button
                                onClick={onClickProfile}>
                                <ListItemAvatar style={{ minWidth: '50px' }}>
                                    <Avatar src={loginStore.userInfo.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography className={classes.name}>
                                            {loginStore.userInfo.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            className={classes.headline}>
                                            {loginStore.userInfo.headline}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>

                        <Divider style={{ marginTop: '10px' }} />

                        <Grid
                            container
                            direction="column"
                            style={{ padding: 12 }}>
                            <Typography style={{ fontWeight: 'bold' }}>
                                Account
                            </Typography>
                            <Link
                                to="/change-password"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                Security
                            </Link>
                            <Link
                                to="/"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                Help
                            </Link>
                        </Grid>

                        <Divider />

                        <Grid
                            container
                            direction="column"
                            style={{ padding: 12 }}>
                            <Typography style={{ fontWeight: 'bold' }}>
                                Manage
                            </Typography>
                            <Link
                                to="#"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                Post & Activity
                            </Link>
                            <Link
                                to="/myjob"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                Job Posting
                            </Link>
                            <Link
                                to="/myorganization"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                My organization
                            </Link>
                            <Link
                                to="/organization/new"
                                style={{
                                    color: '#808080',
                                    lineHeight: '20px'
                                }}>
                                Create an organization
                            </Link>
                        </Grid>

                        <Divider style={{ marginBottom: '10px' }} />

                        <Grid
                            container
                            justify="center"
                            style={{ marginBottom: 10 }}>
                            <Button
                                className={classes.btn}
                                onClick={() => signOut()}>
                                sign out
                            </Button>
                        </Grid>
                    </div>
                ) : (
                    <Grid
                        container
                        justify="center"
                        style={{ padding: '10px 0' }}>
                        <Link to="/" className={classes.btnSignin}>
                            sign in
                        </Link>
                    </Grid>
                )}
            </Popover>
        </div>
    );
});

export default Header;
