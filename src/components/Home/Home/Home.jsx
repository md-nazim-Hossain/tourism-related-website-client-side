import React from 'react';
import { Helmet } from 'react-helmet';
import Contacts from '../../Contacts/Contacts';
import FindUs from '../FindUs/FindUs';
import HomeServices from '../HomeServices/HomeServices';
import Notify from '../Notify/Notify';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Green Tourism | Home</title>
            </Helmet>
            <HomeServices></HomeServices>
            <Notify></Notify>
            <FindUs></FindUs>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;