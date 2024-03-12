import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Home Pages
import HomeOne from '../pages/HomeOne';
import HomeTwo from '../pages/HomeTwo';
import HomeThree from '../pages/HomeThree';

// About Page
import About from '../pages/About';

// Blog Pages
import Blog from '../pages/Blog';
import BlogGrid from '../pages/BlogGrid';
import BlogDetails from '../pages/BlogDetails';

// Pricing Plans Page
import PricePlan from '../pages/PricePlan';

// Service Pages
import Service from '../pages/Service';
import ServiceDetails from '../pages/ServiceDetails';

// Team Pages
import Team from '../pages/Team';
import TeamDetails from '../pages/TeamDetails';

// Project Pages
import Project from '../pages/Project';
import ProjectDetails from '../pages/ProjectDetails';

// Contact Page
import Contact from '../pages/Contact';

// Not Fouond Page
import NotFound from '../pages/NotFound';
import Careers from "../pages/Careers";
import CareersDetails from "../pages/CareersDetails";
import Admn from "../pages/Admn";
import Login from '../pages/Login';


const AppRouters = () => (
  const  [{careers},dispatch] = useStateValue();

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
  const fetchData = async () => {
    await getAllCareers().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_CAREERS,
        careers: data,
      });
    });
  };
useEffect(() => {
  fetchData();
}, []);
  return
);

export default AppRouters;