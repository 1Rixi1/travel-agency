import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import tourData from "../../assets/data/tours";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import { calculateAvgRating } from "../../utils/calculateAvgRating";

import avatar from "../../assets/images/avatar.jpg";

import "./tour-details.css";
import { Booking } from "../../components/Booking/Booking";

export const TourDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    title,
    city,
    distance,
    price,
    maxGroupSize,
    desc,
    reviews,
    address,
    photo,
    featured,
  } = tour;

  const { avgRating, totalRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="img" />

              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}

                    {totalRating === 0 ? (
                      "Нет рейтинга"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-fill"></i> {address}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ${price} /
                    за человека
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize}
                  </span>
                </div>
                <h5>Описание</h5>
                <p>{desc}</p>
              </div>

              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-4 mb-4 rating__group">
                    <span onClick={() => setTourRating(1)}>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input
                      type="text"
                      placeholder="поделитесь своими мыслями"
                      ref={reviewMsgRef}
                      required
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Отправить
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((review) => (
                    <div className="review__item">
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {new Date("01-18-2024").toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>

                          <span className="d-flex align-items-center">
                            {review.rating}
                            <i className="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
