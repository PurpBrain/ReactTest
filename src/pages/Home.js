import React from 'react';
import Slider from '../components/header/Slider';
import Article from '../components/card/Article';
import Form from '../components/formulaire/Form';

const Home = () => {
    const listCars = [
        {title: "Nissan 240sx",img: "240sx.jpg"},
        {title: "Subaru Impreza",img: "Impreza.jpg"},
        {title: "Toyota Jzx100",img: "Jzx100.jpg"}
      ]
    const listSlide = [
        {title: "Nissan Gtr35",img: "GTR35.jpg"},
        {title: "Toyota GT86",img: "gt86.jpg"},
        {title: "Nissan Hakosuka",img: "hakosuka.png"}
    ]
    return (
        <div>
            <Slider list1={listSlide}/>
            <Article list={listCars}/>
            <Form/>
        </div>
    );
};

export default Home;