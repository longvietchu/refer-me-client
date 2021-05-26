import React, { useState } from 'react';
import ProfileScreen from './ProfileScreen';

import { createExp, createEdu } from '../../apis/Functions/users';
import { useSnackbar } from 'notistack';

import { formatDateYYYY, formatYear } from '../../config/Function';

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

const ProfileContainer = () => {
    const { enqueueSnackbar } = useSnackbar();

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

    const CreateExp = async () => {
        const res = await createExp({
            job_title: title,
            job_description: description,
            company: company,
            location: location,
            employment_type: emoloymentType,
            joined_at: formatDateYYYY(startDate),
            left_at: formatDateYYYY(endDate)
            // organization_id: '6086e654dd32e40be082fb0c'
        });
        console.log('ress', res);
        if (res.data.data && res.data.success == true) {
            closeModal();
            enqueueSnackbar('Create new successfully!', {
                variant: 'success'
            });
        }
    };

    const CreateEdu = async () => {
        const res = await createEdu({
            title: title,
            description: description,
            joined_at: formatYear(startDate),
            graduated_at: formatYear(endDate)
            // organization_id: '6086e654dd32e40be082fb0c'
        });
    };
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
