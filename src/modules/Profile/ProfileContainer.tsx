import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ProfileScreen from './ProfileScreen';
import { profileStore } from './profileStore';

const ProfileContainer = observer(() => {
    let { user_id } = useParams<any>();
    useEffect(() => {
        profileStore.getProfile(user_id);
        profileStore.getExperience(user_id);
        profileStore.getEducation(user_id);
        profileStore.getSkill(user_id);
        // profileStore.searchOrganization('');
        return () => {
            profileStore.profile = undefined;
            profileStore.experienceList = undefined;
            profileStore.educationList = undefined;
            profileStore.skillList = undefined;
        };
    }, [user_id]);
    return <ProfileScreen />;
});

export default ProfileContainer;
