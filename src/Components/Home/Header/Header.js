import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeroCarousel from '../HeroCarousel/HeroCarousel';

const Header = () => {
    return (
        <header>
            <Navbar />
            <HeroCarousel />
        </header>
    );
};

export default Header;