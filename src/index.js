import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {},
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //   </Provider>
);

reportWebVitals();
