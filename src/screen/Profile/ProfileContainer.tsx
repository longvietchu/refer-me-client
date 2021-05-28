import React, { useEffect, useState } from 'react';
import ProfileScreen from './ProfileScreen';

import {
    getUser,
    getExp,
    createExp,
    createEdu
} from '../../apis/Functions/users';
import { useSnackbar } from 'notistack';

import { saveUserToRedux, getUserInfor } from '../../actions/users';
import { connect } from 'react-redux';

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

export interface IExperience {
    _id: string;
    job_title: string;
    job_description: string;
    company: string;
    location: string;
    employment_type: string;
    joined_at: string;
    left_at: string;
    user_id: string;
    organization_id: string;
    created_at: string;
    updated_at: string;
}

const ProfileContainer = (props: any) => {
    const { enqueueSnackbar } = useSnackbar();

    // const { userInfo } = props.userReducer;

    const [currentUser, setCurrentUser] = useState<any>();
    // const [newUser, setNewUser] = useState({});
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

    // useEffect(() => {
    //     const user = (' ' + currentUser).slice(1);
    //     setNewUser(user);
    // }, [currentUser]);

    useEffect(() => {
        GetCurrentUser();
    }, []);

    useEffect(() => {
        GetExp();
    }, [currentUser]);

    const GetCurrentUser = async () => {
        const res = await getUser();
        if (res.data.data) {
            setCurrentUser(res.data.data);
        }
    };

    const GetExp = async () => {
        console.log('----', currentUser);
        if (currentUser) {
            const res = await getExp({
                user_id: currentUser.id
            });
            console.log('resss', res);
            setListExp(res.data.data);
        }
    };

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
            listExp={listExp}
        />
    );
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps, { getUserInfor })(ProfileContainer);
