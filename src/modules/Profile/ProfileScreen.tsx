import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Avatar, Box, Hidden, Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Edit, FiberManualRecordOutlined, Add } from '@material-ui/icons';
import CreateExperience from './Experience/CreateExperience';
import ListExperience from './Experience/ListExperience';
import Widgets from '../../common/components/widgets/Widgets';
import Header from '../../common/components/header/Header';
import Styles from './Style';

import { IEmployments } from './ProfileContainer';
import CreateEducation from './Education/CreateEducation';
import ModalEdit from './EditProfile/ModalEdit';
import { observer } from 'mobx-react-lite';
import { loginStore } from '../Login/loginStore';
import { stringUtil } from '../../common/utils/StringUtils';

import { profileStore } from './profileStore';
import { experienceStore } from './Experience/experienceStore';
import { educationStore } from './Education/educationStore';
import ListEducation from './Education/ListEducation';
import EditExperience from './Experience/EditExperience';
import EditEducation from './Education/EditEducation';

interface IProps {
    CreateExp: any;
    modalProfile: boolean;
    modalExp: boolean;
    modalEdu: boolean;
    openModalProfile: VoidFunction;
    closeModalProfile: VoidFunction;
    openModal: VoidFunction;
    closeModal: VoidFunction;
    openModalEdu: VoidFunction;
    closeModalEdu: VoidFunction;
    startDate: any;
    endDate: any;
    setStartDate: any;
    setEndDate: any;
    setTitle: any;
    setCompany: any;
    setLocation: any;
    setDescription: any;
    setEmoloymentType: any;
    employments: IEmployments[];
}

const ProfileScreen = observer((props: IProps) => {
    useEffect(() => {
        // if (profileStore.profile) {
        //     experienceStore.getExperienceOfUser(profileStore.profile.user_id);
        //     educationStore.getEducationOfUser(profileStore.profile.user_id);
        // }
    }, [educationStore.userEdu, experienceStore.userExp]);

    useEffect(() => {
        educationStore.getOrganization();
    }, []);

    const {
        CreateExp,
        modalProfile,
        modalExp,
        modalEdu,
        openModalProfile,
        closeModalProfile,
        openModal,
        closeModal,
        openModalEdu,
        closeModalEdu,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        setTitle,
        setCompany,
        setLocation,
        setDescription,
        setEmoloymentType,
        employments
    } = props;
    const classes = Styles();
    const history = useHistory();

    if (loginStore.userInfo && profileStore.profile) {
        return (
            <Grid container className={classes.app}>
                <Grid
                    item
                    container
                    className={classes.app__header}
                    // style={{
                    //   boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
                    // }}
                >
                    {/* Header */}
                    <Header />
                </Grid>
                <Grid item container className={classes.app__body}>
                    <Grid item className={classes.body__feed} xs={12} md={7}>
                        <Card>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <div className={classes.avatarBox}>
                                        <Box>
                                            <Avatar
                                                className={classes.avatar}
                                                src={loginStore.userInfo.avatar}
                                            />
                                        </Box>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid style={{ marginLeft: '1rem' }} item xs={12}>
                                <div
                                    style={{ justifyContent: 'space-between' }}
                                    className={classes.horizontalDiv}>
                                    <div></div>
                                    <Button
                                        onClick={() =>
                                            profileStore.openModalEditProfile()
                                        }
                                        className={classes.btn}>
                                        <Edit />
                                    </Button>
                                </div>
                                <div>
                                    <div
                                        style={{ marginTop: '1rem' }}
                                        className={classes.horizontalDiv}>
                                        <Typography
                                            className={classes.nameTypo}
                                            variant="h6"
                                            id="name">
                                            {loginStore.userInfo.name}
                                        </Typography>
                                    </div>
                                    <span>
                                        <Typography id="username">
                                            <small>
                                                @
                                                {stringUtil.unMark(
                                                    loginStore.userInfo.name
                                                )}
                                            </small>
                                        </Typography>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <Typography
                                            id="status"
                                            style={{
                                                fontSize: '1.2rem'
                                            }}>
                                            {profileStore.profile.headline}
                                        </Typography>
                                    </span>
                                </div>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                    spacing={1}
                                    style={{ padding: '5px 0 8px' }}>
                                    <Grid item>
                                        <span>
                                            <Typography id="location">
                                                Hanoi, Hanoi, Vietnam
                                            </Typography>
                                        </span>
                                    </Grid>
                                    <FiberManualRecordOutlined
                                        style={{ fontSize: '0.5rem' }}
                                    />
                                    <Grid item>
                                        <span>
                                            <Typography
                                                id="location"
                                                style={{ color: '#0a66c2' }}>
                                                1 connection
                                            </Typography>
                                        </span>
                                    </Grid>
                                    <FiberManualRecordOutlined
                                        style={{ fontSize: '0.5rem' }}
                                    />
                                    <Grid item>
                                        <span>
                                            <Typography
                                                id="location"
                                                style={{ color: '#0a66c2' }}>
                                                Contact info
                                            </Typography>
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>

                        <Card style={{ marginTop: '20px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item style={{ margin: '24px 24px 0' }}>
                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        Experience
                                    </Typography>
                                </Grid>

                                {loginStore.userInfo.id ===
                                profileStore.profile.user_id ? (
                                    <Grid
                                        item
                                        style={{ margin: '24px 10px 0' }}>
                                        <Button
                                            onClick={() =>
                                                experienceStore.openModalCreateExperience()
                                            }>
                                            <Add style={{ color: '#0a66c2' }} />
                                        </Button>
                                    </Grid>
                                ) : null}
                            </Grid>
                            <ListExperience />
                        </Card>

                        <Card style={{ marginTop: '20px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item style={{ margin: '24px 24px 0' }}>
                                    <Typography
                                        id="status"
                                        style={{ fontSize: '1.2rem' }}>
                                        Education
                                    </Typography>
                                </Grid>
                                {loginStore.userInfo.id ===
                                profileStore.profile.user_id ? (
                                    <Grid
                                        item
                                        style={{ margin: '24px 10px 0' }}>
                                        <Button
                                            onClick={() =>
                                                educationStore.openModalCreateEducation()
                                            }>
                                            <Add style={{ color: '#0a66c2' }} />
                                        </Button>
                                    </Grid>
                                ) : null}
                            </Grid>
                            <ListEducation />
                        </Card>
                    </Grid>

                    <Hidden smDown>
                        <Grid item className={classes.body__widgets} md={3}>
                            {/* Widgets */}
                            <Widgets />
                        </Grid>
                    </Hidden>

                    <ModalEdit
                        // open={editProfile}
                        // onClose={() => setEditProfile(false)}
                        // closeModal={() => setEditProfile(false)}
                        // modalProfile={modalProfile}
                        // closeModalProfile={closeModalProfile}
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />
                    <CreateExperience
                        modalExp={modalExp}
                        closeModal={closeModal}
                        CreateExp={CreateExp}
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        setTitle={setTitle}
                        setCompany={setCompany}
                        setLocation={setLocation}
                        setDescription={setDescription}
                        setEmoloymentType={setEmoloymentType}
                        employments={employments}
                    />
                    <EditExperience
                        modalExp={modalExp}
                        closeModal={closeModal}
                        CreateExp={CreateExp}
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        setTitle={setTitle}
                        setCompany={setCompany}
                        setLocation={setLocation}
                        setDescription={setDescription}
                        setEmoloymentType={setEmoloymentType}
                        employments={employments}
                    />
                    <CreateEducation
                        modalEdu={modalEdu}
                        closeModalEdu={closeModalEdu}
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                    />
                    <EditEducation />
                </Grid>
            </Grid>
        );
    } else return null;
});

export default ProfileScreen;
