import React from "react";
import { CommonSection } from "./CommonSection";
import { Col, Container, Row } from "reactstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

import tourData from "../../assets/data/tours";

import "./tours.css";
import { TourCard } from "../../components/Tours/TourCard";
import { NewsLetter } from "../../components/NewsLetter/NewsLetter";
import maleTourist from "../../assets/images/male-tourist.png";

export const Tours = () => {
  return (
    <>
      <CommonSection title={"Все туры"} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {" "}
            {tourData.map((tour, idx) => (
              <Col lg="3" key={idx}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="newsletter">
        <Container>
          <Row>
            <Col lg="6">
              <NewsLetter />
            </Col>
            <Col lg="6">
              <div className="newsletter__img">
                <img src={maleTourist} alt="maleTourist" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
