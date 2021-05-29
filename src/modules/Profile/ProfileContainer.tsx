import React, { useEffect, useState } from 'react';
import ProfileScreen from './ProfileScreen';

import { useSnackbar } from 'notistack';

import { formatDateYYYY, formatYear } from '../../common/config/Function';
import { profileStore } from './profileStore';

const employments = [
    {
        value: 'initial',
        label: 'Choose one...'
    },
    {
        value: 'full',
        label: 'Full-time'
    },
    {
        value: 'part',
        label: 'Part-time'
    },
    {
        value: 'contract',
        label: 'Contract'
    },
    {
        value: 'temporary',
        label: 'Temporary'
    },
    {
        value: 'internship',
        label: 'Internship'
    }
];

export interface IEmployments {
    value: string;
    label: string;
}

const ProfileContainer = (props: any) => {
    const { enqueueSnackbar } = useSnackbar();
    const [listExp, setListExp] = useState([]);

    const [modalProfile, setModalProfile] = useState(false);
    const [modalExp, setModalIsOpen] = useState(false);
    const [modalEdu, setModalEdu] = useState(false);

    const openModalProfile = (): void => {
        setModalProfile(true);
    };

    const closeModalProfile = (): void => {
        setModalProfile(false);
    };

    const openModal = (): void => {
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    const openModalEdu = (): void => {
        setModalEdu(true);
    };

    const closeModalEdu = (): void => {
        setModalEdu(false);
    };

    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [headline, setHeadline] = useState('');
    const [description, setDescription] = useState('');
    const [emoloymentType, setEmoloymentType] = useState<IEmployments[]>([]);

    let date = new Date();
    const [startDate, setStartDate] = useState(
        new Date(date.getFullYear(), date.getMonth(), 1)
    );
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        // GetExp();
    }, []);

    const CreateExp = async () => {};

    const CreateEdu = async () => {};
    return (
        <ProfileScreen
            CreateExp={CreateExp}
            modalProfile={modalProfile}
            modalExp={modalExp}
            modalEdu={modalEdu}
            openModalProfile={openModalProfile}
            closeModalProfile={closeModalProfile}
            openModal={openModal}
            closeModal={closeModal}
            openModalEdu={openModalEdu}
            closeModalEdu={closeModalEdu}
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
    );
};

export default ProfileContainer;
