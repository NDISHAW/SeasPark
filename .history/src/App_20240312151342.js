import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouters from './routes/AppRouters';
import { Provider } from "react-redux";
import store from './context/store';

import "./assets/fonts/exo/exo.css";
import "./assets/fonts/fira-sans/fira-sans.css";
import "slick-carousel/slick/slick.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/scss/style.scss";
import ScrollToTop from './components/ScrollToTop';
import { getAllCareers } from './utils/firebaseFunctions';



function App() {

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
        <AppRouters />
        <ScrollToTop />
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;
