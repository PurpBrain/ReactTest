import { Card, Container, Row, Col } from "react-bootstrap"

const Article = () => {
    return (
        <Container className="pt-3">
            <Row>
                <Col>
                    <Card>
                        <Card.Img className="sameImg" variant="top" src={require('../../assets/img/240sx.jpg')} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="sameImg" variant="top" src={require('../../assets/img/240sx.jpg')} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className="sameImg" variant="top" src={require('../../assets/img/240sx.jpg')} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Article;