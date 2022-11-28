import React from 'react';
import HomeAdvertisement from '../HomeAdvertisement/HomeAdvertisement';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategories from '../HomeCategories/HomeCategories';
import HomeNews from '../HomeNews/HomeNews';
import UseTitle from './../../../hooks/useTitle';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategories></HomeCategories>
            <HomeAdvertisement></HomeAdvertisement>
            <HomeNews></HomeNews>
        </div>
    );
};

export default Home;