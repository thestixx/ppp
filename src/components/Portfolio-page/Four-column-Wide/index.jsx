import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-one-main';
import Banner from '../../Banner';
import Portfolio from './Portfolio';
import Action from '../../Action';
import Footer from '../../Footer';
import ScrollTop from '../../ScrollTop';
import Sidebar from '../../Sidebar';
const TwoColumns = () => {
    return (
        <>
         <Loader />
         <Sidebar />
         <Nav/>
         <Banner name ="Four Columns Wide" />
         <Portfolio />
         <Action/>
         <Footer />
         <ScrollTop />
        </>

    );
}
export default TwoColumns;