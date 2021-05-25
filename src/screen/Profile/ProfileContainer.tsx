import React, { useState } from 'react';
import ProfileScreen from './ProfileScreen';

import { createExp } from '../../apis/Functions/users';

const ProfileContainer = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [modalExp, setModalIsOpen] = useState(false);

    const openModal = (): void => {
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');

    let date = new Date();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1)
    );
    const [endDate, setEndDate] = useState(new Date());

    const onChangeDate = (startDate: any, endDate: any) => {
        console.log(startDate + '----' + endDate);
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const CreateExp = async () => {
        const res = await createExp({
            job_title: 'Senior Software Engineer',
            job_description: 'Build Messenger',
            company: 'Facebook',
            location: 'CA, USA',
            employment_type: 'Full-time',
            joined_at: '2023-08-28',
            left_at: '2025-08-28',
            organization_id: '6086e654dd32e40be082fb0c'
        });
        console.log('ress', res);
    };
    return (
        <ProfileScreen
            CreateExp={CreateExp}
            modalExp={modalExp}
            openModal={openModal}
            closeModal={closeModal}
        />
    );
};

export default ProfileContainer;
