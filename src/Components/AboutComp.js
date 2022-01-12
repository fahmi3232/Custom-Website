import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import Br6 from '../Assets/br6.png'

const AboutComp = () => {
  return (
    <div>
      <Container className="mt-3 p-3">
        <Row className="d-flex align-items-center">
          <Col>
            <h1>Semua tentang kita</h1>
            <p>
              Using Lorem ipsum to focus attention on graphic elements in a
              webpage design proposal In publishing and graphic design , Lorem
              ipsum is a placeholder text commonly
            </p>
            <button>Klik Selengkapnya</button>
          </Col>
          <Col>
            <img
              style={{ borderRadius: "50%" }}
              src="https://placeimg.com/640/480/arch"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComp;
