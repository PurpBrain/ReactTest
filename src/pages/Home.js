import React from 'react';
import Header from '../components/header/Slider';
import Article from '../components/card/Article';
import Form from '../components/formulaire/Form';

const Home = () => {
    const listCars = [
        {title: "240sx",img: "../../assets/img/240sx.jpg"},
        {title: "Subaru",img: "../../assets/img/Impreza.jpg"},
        {title: "Jzx100",img: "../../assets/img/Jzx100.jpg"}
      ]
    return (
        <div>
            <Header/>
            <Article list={listCars}/>
            <Form/>
        </div>
    );
};

export default Home;