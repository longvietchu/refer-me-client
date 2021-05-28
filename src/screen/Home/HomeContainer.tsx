import React from 'react';
import HomeScreen from './HomeScreen';

import { saveUserToRedux } from '../../actions/users';
import { connect, useSelector } from 'react-redux';

const HomeContainer = (props: any) => {
    const { userInfo } = props;
    console.log('props--', props.user);

    const user = useSelector((state: any) => state.userReducer);

    console.log('userrr', user);

    return <HomeScreen />;
};

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps, { saveUserToRedux })(HomeContainer);
