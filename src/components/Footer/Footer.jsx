import logo from "../../assets/images/logo.png";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";
export const Footer = () => {
  const year = new Date().getFullYear();

  const quick__links = [
    {
      path: "/home",
      display: "Главная",
    },
    {
      path: "/tours",
      display: "Туры",
    },
  ];

  const quick__links2 = [
    {
      path: "/login",
      display: "Авторизоваться",
    },
    {
      path: "/register",
      display: "Регистрация",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt={logo} />
              <p>
                Путешествуйте с нами и откройте новые горизонты! Мы создаем
                незабываемые впечатления
              </p>

              <div className="social__links">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Общие ссылки</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, idx) => (
                <Link to={item.path}>{item.display}</Link>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Другие ссылки</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, idx) => (
                <Link to={item.path}>{item.display}</Link>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Контакты</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="d-flex align-items-start gap-3 ps-0 border-0">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <span>Адрес :</span>
                </h6>

                <p>Россия, Санкт-Петербург</p>
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-start gap-3 ps-0 border-0">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <span>Эл. адрес :</span>
                </h6>

                <p>test@test.com</p>
              </ListGroupItem>
              <ListGroupItem className="d-flex align-items-start gap-3 ps-0 border-0">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <span>Телефон :</span>
                </h6>

                <p>+123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col className="text-center pt-5" lg="12">
            <p className="copyright">@ Все права защищены {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
