import React from 'react';
import Header from '../components/layouts/Header';
import Container from '../components/layouts/Container';
import Footer from '../components/layouts/Footer';
import '../assets/css/Main.css';
const Home = () => {
    return(
        <div className="Main w-screen h-screen">
            <Header />  
            <Container />
            {/* <Footer />       */}
        </div>
    );
}
export default Home;