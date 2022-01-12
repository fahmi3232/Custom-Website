import React from "react";
import { Col, Container, Row, Card, Button} from "react-bootstrap";

const CardComp = () => {
  return (
    <div>
      <Container className="d-flex align-self-center     justify-content-center mt-3" >
        <Row >
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src="https://placeimg.com/640/480/people" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "21rem" }}>
              <Card.Img variant="top" src="https://placeimg.com/640/480/nature" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardComp;
