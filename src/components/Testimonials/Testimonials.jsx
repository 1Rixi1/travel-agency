import React from "react";

import Slider from "react-slick";

import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "Прекрасный тур! Мы получили массу удовольствия от поездки. Гид был очень
          знающим и дружелюбным. Пейзажи просто завораживают, рекомендую всем!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava1} alt="ava1" />
          <div>
            <h6 className="nb-0 mt-3">Андрей Смирнов</h6>
            <p>Москва, Россия</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Это было лучшее путешествие в моей жизни! Организация на высшем уровне, и
          все прошло идеально. Особое спасибо за комфортные условия и заботу!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="ava2" />
          <div>
            <h6 className="nb-0 mt-3">Лина Франклин</h6>
            <p>Лондон, Великобритания</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Спасибо за удивительные впечатления! Тур был отлично организован, и мы
          успели увидеть все основные достопримечательности. Отличное
          соотношение цены и качества."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava3} alt="ava3" />
          <div>
            <h6 className="nb-0 mt-3">Дмитрий Петров</h6>
            <p>Санкт-Петербург, Россия</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Были на этом туре всей семьей, и это было просто потрясающе! Всё было
          продумано до мелочей, мы чувствовали себя очень комфортно на протяжении
          всего путешествия."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="ava2" />
          <div>
            <h6 className="nb-0 mt-3">Мария Иванова</h6>
            <p>Киев, Украина</p>
          </div>
        </div>
      </div>
    </Slider>

  );
};
