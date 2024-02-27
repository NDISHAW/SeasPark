import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouters from './routes/AppRouters';
import { Provider } from "react-redux";
import store from "./store";

import "./assets/fonts/exo/exo.css";
import "./assets/fonts/fira-sans/fira-sans.css";
import "slick-carousel/slick/slick.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/scss/style.scss";


function App() {

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter></Provider>
  );
}

export default App;
