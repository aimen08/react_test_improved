import React from "react";
import { render } from "react-dom";
import "./index.css";
import "flowbite";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LandingRoute, PostCheckoutRoute, SearchResultRoute } from "./routes";
import store from "./store";
import { StoreProvider } from "easy-peasy";

const rootElement = document.getElementById("root");
render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/result/:term" element={<SearchResultRoute />} />
          <Route path="/post" element={<PostCheckoutRoute />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </StoreProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
