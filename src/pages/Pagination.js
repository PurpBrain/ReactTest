import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pagination = () => {

    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMore = () => {
        setVisible((preValue) => preValue + 3)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setItems(data))
    }, []);

    return (
        <Container>
            <Row >
                <Col>
                    {items.slice(0, visible).map((items) => (
                        <div className='py-3'>
                            <div className='py-2 card text-center'>
                                <span>{items.id}</span>
                                <p>{items.body}</p>
                            </div>
                        </div>
                    ))}
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary' onClick={showMore}>Load More !</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pagination;