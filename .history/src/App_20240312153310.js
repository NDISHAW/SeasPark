import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouters from './routes/AppRouters';
import { Provider } from "react-redux";

import "./assets/fonts/exo/exo.css";
import "./assets/fonts/fira-sans/fira-sans.css";
import "slick-carousel/slick/slick.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/scss/style.scss";
import ScrollToTop from './components/ScrollToTop';
import { getAllCareers } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';



function App() {
   const [ dispatch] = useStateValue();

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
  const fetchData = async () => {
    await getAllCareers().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_CAREERS,
        careers: data,
      });
    });
  };
useEffect(() => {
  fetchData();
}, []);
  return (
  <>
      {/* <BrowserRouter> */}
        <AppRouters />
        <ScrollToTop />
      {/* </BrowserRouter> */}
</>
  );
}

export default App;
