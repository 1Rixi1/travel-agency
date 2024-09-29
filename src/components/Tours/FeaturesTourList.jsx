import React from "react";

import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import { TourCard } from "./TourCard";

export const FeaturesTourList = () => {
  return (
    <>
      {tourData.map((tour) => (
        <Col className="mb-4" lg="3" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};
