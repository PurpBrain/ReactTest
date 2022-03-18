import { Card, Container, Row, Col } from "react-bootstrap"

const Article = (props) => {
    const { list } = props;

    return (
        <div className="idCheck">
            <Container className="pt-3">
                <Row>
                    {Object.entries(list).map((el, index) => {
                            console.log(el)
                            return (
                                <Col key={index}>
                                    <Card >
                                        <Card.Img key={el[1]} className="sameImg" variant="top" src={require(`../../assets/img/` + el[1].img)} />
                                        <Card.Body>
                                            <Card.Text>
                                                {el[1].title}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </div>

    )
}

export default Article;