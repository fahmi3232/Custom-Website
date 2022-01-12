import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import Photo from '../Assets/photo.jpeg'
import Gm2 from '../Assets/gm2.jpg'
import './style.css'

const SliderComp = () => {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <Carousel style={{width: "100%"}}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Photo}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderComp;
