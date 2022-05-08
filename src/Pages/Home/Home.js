import React from 'react';
import Banner from '../Banner/Banner';
import CustomersReview from '../CustomersReview/CustomersReview';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CustomersReview></CustomersReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;