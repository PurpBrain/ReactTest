import React from 'react';
import { Carousel } from 'react-bootstrap';
const Header = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={require('../../assets/img/gt86.jpg')}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h3>Toyota Gt86</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={require('../../assets/img/civic.jpg')}
                        alt="Second slide"

                    />

                    <Carousel.Caption>
                        <h3>Honda Civic</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={require('../../assets/img/Impreza.jpg')}
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Subaru Impreza</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Header;