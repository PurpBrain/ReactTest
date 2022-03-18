import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = (props) => {
    const { list1 } = props;

    return (
        <Carousel>
            {Object.entries(list1).map((slide, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            key={slide[1]}
                            className="d-block w-100 h-50"
                            src={require(`../../assets/img/` + slide[1].img)}
                            alt="{slide[1].title}"
                        />
                        <Carousel.Caption>
                            {slide[1].title}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
};

export default Header;