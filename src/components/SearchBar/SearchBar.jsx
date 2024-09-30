import React, { useRef } from "react";
import { Col, Form, FormGroup } from "reactstrap";

import "./search-bar.css";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxPeopleRef = useRef();

  const onClickSubmitHandler = () => {
    const locationValue = locationRef.current.value;
    const distanceValue = distanceRef.current.value;
    const maxPeopleValue = maxPeopleRef.current.value;
    console.log("maxPeopleValue", maxPeopleValue);
    if (
      locationValue === "" ||
      distanceValue === "0" ||
      maxPeopleValue === "0"
    ) {
      return alert("Все поля обязательны !");
    }
  };

  return (
    <Col lg="12">
      <div className="search-bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>

            <div>
              <h6>Расположение</h6>
              <input
                type="text"
                placeholder="Куда едете ?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>

            <div>
              <h6>Расстояние</h6>
              <input
                type="number"
                placeholder="Расстояние"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group">
            <span>
              <i className="ri-group-line"></i>
            </span>

            <div>
              <h6>Кол-во людей</h6>
              <input type="number" placeholder="0" ref={maxPeopleRef} />
            </div>
          </FormGroup>

          <span
            className="search-icon"
            type="submit"
            onClick={onClickSubmitHandler}
          >
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
