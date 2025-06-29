import React from 'react';
import ProductSection from '../Sections/ProductSection';
import Banner from '../Sections/Banner';
import WhyUs from '../Sections/WhyUs';

const Home = () => {
    return (
        <>
        <Banner />
          <ProductSection />
          <WhyUs />  
        </>
    );
};

export default Home;