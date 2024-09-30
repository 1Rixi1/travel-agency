import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Subtitle } from "../components/Subtitle/Subtitle";

import worldImg from "../assets/images/world.png";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import experienceImg from "../assets/images/experience.png";
import heroVideo from "../assets/images/hero-video.mp4";
import SearchBar from "../components/SearchBar/SearchBar";
import ServiceList from "../components/Services/ServiceList";
import { FeaturesTourList } from "../components/Tours/FeaturesTourList";
import { GalleryImages } from "../components/Gallery/GalleryImages.jsx";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";

import maleTourist from "../assets/images/male-tourist.png";

export const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Знайте, прежде чем ехать"} />
                  <img src={worldImg} alt="worldImg" />
                </div>
                <h1>
                  Путешествия открывают двери для творчества и
                  <span className="highlight"> воспоминания</span>
                </h1>
                <p>
                  Откройте для себя новые горизонты, вдохновляйтесь культурой,
                  природой и впечатлениями, которые навсегда останутся в вашем
                  сердце.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt={heroImg2} />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">Наши услуги</h5>
              <h2 className="service__title">
                Мы предлагаем наши лучшие услуги
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="mb-5" lg="12">
              <Subtitle subtitle={"Посетить сайт"} />
              <h2 className="featured__tour-title">Наши знаменитые туры</h2>
            </Col>
            <FeaturesTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Опыт"} />
                <h2>
                  Благодаря нашему опыту <br /> Мы будем обслуживать вас
                </h2>

                <p>
                  Мы обеспечим высокое качество и индивидуальный подход,
                  удовлетворяя все ваши потребности и пожелания
                </p>
              </div>

              <div className="container__wrapper d-flex align-items-center gap-5">
                <div className="container__box">
                  <span>12 тыс.</span>
                  <h6>Успешных поездок</h6>
                </div>
                <div className="container__box">
                  <span>2 тыс.</span>
                  <h6>Регулярных клиентов</h6>
                </div>
                <div className="container__box">
                  <span>15</span>
                  <h6>Лет опыта</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Галерея"} />
              <h2 className="gallery__title">
                Наша галерея туров клиентов
              </h2>
            </Col>
            <Col lg="12">
              <GalleryImages />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Наши фанаты"} />
              <h2 className="testimonial__title">
                Что наши фанаты говорят о нас
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
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
