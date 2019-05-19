import React from 'react';
import MainCarousel from 'components/mainCarousel.js'
import UserLocalGridList from 'components/UserLocalGridList.js'


const Home = () => {
    return (
        <div>
            <MainCarousel />
            <UserLocalGridList />
        </div>
    );
};

export default Home;