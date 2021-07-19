import React, { useState } from 'react';
import {
    Button,
    Paper,
    Avatar,
    Box,
    Hidden,
    Divider,
    Card,
    Link,
    Grid,
    Typography,
    ButtonBase,
    Tabs,
    Tab,
    Container
} from '@material-ui/core';
import {
    Edit,
    FiberManualRecordOutlined,
    Add,
    DirectionsRounded,
    CameraAlt,
    Delete,
    NavigateBefore,
    NavigateNext
} from '@material-ui/icons';

import Widgets from '../../../common/components/widgets/Widgets';
import Header from '../../../common/components/header/Header';
import Styles from './Style';

import { useHistory } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import { formatDateTimeDDMM } from '../../../common/config/Function';

import { observer } from 'mobx-react-lite';
import { organizationStore } from '../organizationStore';
import { loginStore } from '../../Login/loginStore';
import LoadingHeader from '../../../common/components/util/LoadingHeader';
import ModalEdit from '../EditProfileOrganization/ModalEdit';
import DeleteEducation from './DeleteOrganization';
import JobOrgCard from './JobOrgCard';
import LoadingCard from '../../../common/components/util/LoadingCard';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: 500
//     }
// }));

const ProfileOrgScreen = observer(() => {
    const classes = Styles();

    const [showMore, setShowMore] = useState<boolean>(false);
    const [value, setValue] = useState(0);
    const [tab, setTab] = useState('About');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const handleNextTab = () => {
        let newValue = value;
        if (newValue !== 1) {
            newValue = newValue + 1;
            setValue(newValue);
        }
    };

    const handleBackTab = () => {
        let newValue = value;
        if (newValue !== 0) {
            newValue = newValue - 1;
            setValue(newValue);
        }
    };

    const getText = (text: string) => {
        // For Text that is shorter than desired length
        if (text.length <= 258) return text;
        // If text is longer than desired length & showMore is true
        if (text.length > 258 && showMore) {
            return (
                <>
                    <p>{text}</p>

                    {/* <button onClick={() => setShowMore(false)}>
                        Show Less
                    </button> */}
                    <div>
                        <Divider />
                        <Button
                            className={classes.btn_details}
                            onClick={() => setShowMore(false)}>
                            See less
                        </Button>
                    </div>
                </>
            );
        }
        // If text is longer than desired length & showMore is false
        if (text.length > 258) {
            return (
                <>
                    <p className={!showMore ? classes.hidden : undefined}>
                        {text.slice(0, 258)}
                    </p>

                    <div>
                        <Divider />
                        <Button
                            className={classes.btn_details}
                            onClick={() => setShowMore(true)}>
                            See all details
                        </Button>
                    </div>
                </>
            );
        }
    };

    const onChangeAvatar = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        organizationStore.uploadImage(file);
    };

    const onChangeCoverImg = (e: any) => {
        e.preventDefault();
        let file = e.target.files[0];
        organizationStore.uploadCoverImage(file);
    };

    if (loginStore.userInfo && organizationStore.organization) {
        return (
            <Grid container className={classes.app}>
                <Helmet>
                    <title>Refer Me</title>
                </Helmet>
                <Grid item container className={classes.app__header}>
                    {/* Header */}
                    <Header />
                </Grid>
                <Grid item container className={classes.app__body}>
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Card>
                            <Grid item xs={12}>
                                <Paper
                                    className={classes.paper}
                                    style={{
                                        background: organizationStore
                                            .organization.background_image
                                            ? `url(${organizationStore.organization.background_image}) no-repeat center center`
                                            : 'rgb(204, 214, 221)',
                                        backgroundSize: 'cover'
                                    }}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="cover-image"
                                        multiple
                                        type="file"
                                        onChange={(e) => {
                                            onChangeCoverImg(e);
                                        }}
                                    />
                                    {loginStore.userInfo.id ===
                                        organizationStore.organization
                                            .user_id && (
                                        <label
                                            htmlFor="cover-image"
                                            className={classes.labelCover}>
                                            <CameraAlt />
                                        </label>
                                    )}

                                    <div className={classes.avatarBox}>
                                        <Box>
                                            <Avatar
                                                className={classes.avatar}
                                                src={
                                                    organizationStore
                                                        .organization.avatar
                                                }
                                            />
                                            <input
                                                accept="image/*"
                                                className={classes.input}
                                                id="avatar-image"
                                                multiple
                                                type="file"
                                                onChange={(e) => {
                                                    onChangeAvatar(e);
                                                }}
                                            />
                                            {loginStore.userInfo.id ===
                                                organizationStore.organization
                                                    .user_id && (
                                                <label
                                                    htmlFor="avatar-image"
                                                    className={
                                                        classes.labelAvatar
                                                    }>
                                                    <Edit />
                                                </label>
                                            )}
                                        </Box>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid
                                style={{
                                    padding: '1rem',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                                item
                                xs={12}>
                                <div className={classes.userInfo}>
                                    <Typography
                                        className={classes.nameTypo}
                                        variant="h6"
                                        id="name">
                                        {organizationStore.organization.name}
                                    </Typography>

                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        {
                                            organizationStore.organization
                                                .industry
                                        }
                                    </Typography>

                                    {organizationStore.organization.website ? (
                                        <Button
                                            endIcon={<DirectionsRounded />}
                                            className={classes.btn_vis}
                                            onClick={() => {
                                                if (
                                                    organizationStore.organization
                                                ) {
                                                    window.open(
                                                        `${organizationStore.organization.website}`,
                                                        '_blank'
                                                    );
                                                }
                                            }}>
                                            Visit website
                                        </Button>
                                    ) : null}
                                </div>
                                {loginStore.userInfo.id ===
                                    organizationStore.organization.user_id && (
                                    <div className={classes.careerInfo}>
                                        <Button
                                            onClick={() =>
                                                (organizationStore.modalOrganization.edit =
                                                    true)
                                            }
                                            className={classes.btn}>
                                            <Edit />
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                (organizationStore.modalOrganization.delete =
                                                    true)
                                            }
                                            className={classes.btn}>
                                            <Delete />
                                        </Button>
                                    </div>
                                )}
                            </Grid>
                            <Divider />
                            <Grid style={{ flexGrow: 1 }} item xs={12}>
                                <div>
                                    <Hidden smUp>
                                        <Button onClick={handleBackTab}>
                                            <NavigateBefore
                                                className={classes.backArrow}
                                            />
                                        </Button>
                                    </Hidden>

                                    <Tabs
                                        onChange={handleChange}
                                        value={value}
                                        variant="fullWidth"
                                        className={classes.tabs}>
                                        <Tab
                                            tabIndex={0}
                                            label="About"
                                            onClick={() => setTab('About')}
                                            // className={classes.tab}
                                        />
                                        <Tab
                                            tabIndex={1}
                                            label="Jobs"
                                            onClick={() => setTab('Jobs')}
                                            // className={classes.tab}
                                        />
                                    </Tabs>
                                    <Divider />
                                    <Hidden smUp>
                                        <Button onClick={handleNextTab}>
                                            <NavigateNext
                                                className={classes.backArrow}
                                            />
                                        </Button>
                                    </Hidden>
                                </div>
                            </Grid>
                        </Card>

                        <Grid item xs={12}>
                            {tab === 'About' && (
                                <Card
                                    style={{
                                        marginTop: '20px',
                                        borderRadius: 10
                                    }}>
                                    <Typography
                                        style={{
                                            padding: '24px 24px 0px',
                                            fontSize: '20px',
                                            fontWeight: 600
                                        }}>
                                        About
                                    </Typography>
                                    {/* <ReadMore> */}
                                    <p
                                        style={{
                                            color: '#00000099',
                                            padding: '24px 24px'
                                        }}>
                                        {getText(
                                            organizationStore.organization
                                                .description
                                        )}
                                    </p>
                                </Card>
                            )}
                            {tab === 'Jobs' && (
                                <Card
                                    style={{
                                        marginTop: '20px',
                                        borderRadius: 10
                                    }}>
                                    <Typography
                                        style={{
                                            padding: '24px 24px 0px',
                                            fontSize: '20px',
                                            fontWeight: 600
                                        }}>
                                        Recently posted jobs
                                    </Typography>
                                    <Grid
                                        style={{
                                            padding: '24px 24px'
                                        }}
                                        container
                                        spacing={5}>
                                        {organizationStore.listJobOfOrg ? (
                                            organizationStore.listJobOfOrg.map(
                                                (job, index) => (
                                                    <Grid
                                                        item
                                                        key={job._id}
                                                        lg={4}
                                                        md={6}
                                                        xs={12}>
                                                        <JobOrgCard job={job} />
                                                    </Grid>
                                                )
                                            )
                                        ) : (
                                            <LoadingCard />
                                        )}
                                    </Grid>
                                </Card>
                            )}
                        </Grid>

                        <Card style={{ marginTop: '20px', borderRadius: 10 }}>
                            <Typography
                                style={{
                                    padding: '24px 24px 0px',
                                    fontSize: '20px',
                                    fontWeight: 600
                                }}>
                                Contact information
                            </Typography>
                            <Grid container>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    xs={4}
                                    style={{ margin: 10 }}
                                    spacing={3}>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                lineHeight: 1.5
                                            }}>
                                            Website
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                lineHeight: 1.5
                                            }}>
                                            Industry
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                lineHeight: 1.5
                                            }}>
                                            Organization size
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                lineHeight: 1.5
                                            }}>
                                            Founded at
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    xs={7}
                                    style={{ margin: 10 }}
                                    spacing={3}>
                                    <Grid item>
                                        <Link
                                            onClick={() =>
                                                window.open(
                                                    'https://thietbivesinhonline.vn/',
                                                    '_blank'
                                                )
                                            }
                                            component="button"
                                            style={{
                                                lineHeight: 1.5,
                                                fontSize: 16
                                            }}>
                                            {
                                                organizationStore.organization
                                                    .website
                                            }
                                        </Link>
                                    </Grid>

                                    <Grid
                                        item
                                        style={{
                                            lineHeight: 1.5,
                                            fontSize: 16
                                        }}>
                                        <Typography>
                                            {
                                                organizationStore.organization
                                                    .industry
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                lineHeight: 1.5,
                                                fontSize: 16
                                            }}>
                                            {
                                                organizationStore.organization
                                                    .company_size
                                            }{' '}
                                            employees
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{
                                                lineHeight: 1.5,
                                                fontSize: 16
                                            }}>
                                            {formatDateTimeDDMM(
                                                organizationStore.organization
                                                    .founded
                                            )}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                    <Hidden smDown>
                        <Grid item className={classes.body__widgets} md={3}>
                            {/* Widgets */}
                            <Widgets />
                        </Grid>
                    </Hidden>
                    <ModalEdit />
                    <DeleteEducation />
                </Grid>
            </Grid>
        );
    } else return <LoadingHeader />;
});

export default ProfileOrgScreen;
