import React, { useEffect, useRef } from "react";
import { Button, Container, Row } from "reactstrap";

import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const nav__links = [
  {
    path: "/home",
    display: "Главная",
  },
  {
    path: "/tours",
    display: "Туры",
  },
];

export const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFn = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scroll > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFn();

    return window.removeEventListener("scroll", stickyHeaderFn);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((index, id) => (
                  <li className="nav__item" key={id}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                      to={index.path}
                    >
                      {index.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
