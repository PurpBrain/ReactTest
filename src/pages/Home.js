import React from 'react';
import Header from '../components/header/Slider';
import Navs from '../components/Nav';
import Article from '../components/card/Article';
import Form from '../components/formulaire/Form';

const Home = () => {
    return (
        <div>
            <Navs />
            <Header/>
            <Article/>
            <Form/>
        </div>
    );
};

export default Home;