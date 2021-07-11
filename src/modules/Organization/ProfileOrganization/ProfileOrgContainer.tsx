import React, { useEffect } from 'react';

import ProfileOrgScreen from './ProfileOrgScreen';

import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';

import { organizationStore } from '../organizationStore';

const ProfileOrgContainer = observer(() => {
    let { organization_id } = useParams<any>();

    useEffect(() => {
        organizationStore.getAnOrganization(organization_id);
        organizationStore.getJobOfOrganization(organization_id);
        return () => {
            organizationStore.organization = undefined;
        };
    }, [organization_id]);

    return <ProfileOrgScreen />;
});

export default ProfileOrgContainer;
