import React from 'react';
import HomeAdvertisement from '../HomeAdvertisement/HomeAdvertisement';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategories from '../HomeCategories/HomeCategories';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategories></HomeCategories>
            <HomeAdvertisement></HomeAdvertisement>
        </div>
    );
};

export default Home;