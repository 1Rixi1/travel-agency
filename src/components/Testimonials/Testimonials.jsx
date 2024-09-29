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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam architecto blanditiis cupiditate dignissimos doloribus ducimus
          exercitationem expedita, explicabo id illo mollitia neque nulla odio
          porro sunt tempore totam vitae.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava1} alt="ava1" />
          <div>
            <h6 className="nb-0 mt-3"></h6>
            <p>Dohn Doe</p>
          </div>
        </div>
      </div>{" "}
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam architecto blanditiis cupiditate dignissimos doloribus ducimus
          exercitationem expedita, explicabo id illo mollitia neque nulla odio
          porro sunt tempore totam vitae.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="ava2" />
          <div>
            <h6 className="nb-0 mt-3"></h6>
            <p>Lina Franklin</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam architecto blanditiis cupiditate dignissimos doloribus ducimus
          exercitationem expedita, explicabo id illo mollitia neque nulla odio
          porro sunt tempore totam vitae.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava3} alt="ava3" />
          <div>
            <h6 className="nb-0 mt-3"></h6>
            <p>Dohn Doe</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam architecto blanditiis cupiditate dignissimos doloribus ducimus
          exercitationem expedita, explicabo id illo mollitia neque nulla odio
          porro sunt tempore totam vitae.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={ava2} alt="ava2" />
          <div>
            <h6 className="nb-0 mt-3"></h6>
            <p>Dohn Doe</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
