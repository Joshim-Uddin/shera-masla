import React from 'react';
import ProductSection from '../Sections/ProductSection';
import Banner from '../Sections/Banner';
import WhyUs from '../Sections/WhyUs';
import Review from '../Sections/Review';

const Home = () => {
    return (
        <>
        <Banner />
          <ProductSection />
          <WhyUs />
          <Review />  
        </>
    );
};

export default Home;