import React from "react";

import weatherImg from "../../assets/images/weather.png";
import guideImg from "../../assets/images/guide.png";
import customizationImg from "../../assets/images/customization.png";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    imageUrl: weatherImg,
    title: "Рассчитываем лучшую погоду в сезоне",
    desc: "Мы анализируем погодные условия, чтобы выбрать оптимальное время",
  },
  {
    imageUrl: guideImg,
    title: "У нас лучшие туры",
    desc: "Мы предлагаем тщательно подобранные туры с профессиональными гидами",
  },
  {
    imageUrl: customizationImg,
    title: "Настройка под каждого клиента",
    desc: "Мы создаем уникальные предложения для каждого путешественника, учитывая ваши предпочтения и интересы",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
