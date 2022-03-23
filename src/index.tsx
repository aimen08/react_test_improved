import React from "react";
import { render } from "react-dom";
import "./index.css";
import "flowbite";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LandingRoute, PostCheckoutRoute, SearchResultRoute } from "./routes";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/result" element={<PostCheckoutRoute />} />
        <Route path="/post" element={<SearchResultRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
