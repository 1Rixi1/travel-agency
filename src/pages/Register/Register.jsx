import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import registerImg from "../../assets/images/login.png";
import userIcon from "../../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
export const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    navigate("/");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Регистрация</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  У вас уже есть аккаунт ? <Link to="/login">Войти</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
