import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Tours } from "../pages/Tours/Tours";
import { TourDetails } from "../pages/Tours/TourDetails";
import { SearchResultList } from "../pages/SearchResultList";
import { ThankYou } from "../components/ThankYou/ThankYou";

export const Routers = () => {
  return (
    <Routes>
      <Route path={""} element={<Navigate to={"/home"} />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/tours"} element={<Tours />} />
      <Route path={"/thank-you"} element={<ThankYou />} />
      <Route path={"/tours/:id"} element={<TourDetails />} />
      <Route path={"/tours/search"} element={<SearchResultList />} />
    </Routes>
  );
};
