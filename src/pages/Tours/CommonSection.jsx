import React from "react";
import { Col, Container, Row } from "reactstrap";

import './tours.css'

 export const CommonSection = ({ title }) => {
  return (
    <section>
      <div className="common-section">
        <Container>
          <Col lg="12">
            <Row>
              <h1>{title}</h1>
            </Row>
          </Col>
        </Container>
      </div>
    </section>
  );
};

