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
  
  <Fragment>
    <Routes>
      <Route path="/" exact element={<HomeOne />} />
      <Route path="/home-two" exact element={<HomeTwo />} />
      <Route path="/home-three" exact element={<HomeThree />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/price-plan" exact element={<PricePlan />} />
      <Route path="/service" exact element={<Service />} />
      <Route path="/service-details/:id" exact element={<ServiceDetails />} />
      <Route path="/project" exact element={<Project />} />
      <Route path="/project-details" exact element={<ProjectDetails />} />
      <Route path="/team" exact element={<Team />} />
      <Route path="/team-details/:id" exact element={<TeamDetails />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog-grid" exact element={<BlogGrid />} />
      <Route path="/careers" exact element={<Careers />} />
      <Route path="/careers-details/:id" exact element={<CareersDetails />} />

      <Route path="/contact" exact element={<Contact />} />
      <Route path="/admn" exact element={<Admn />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Fragment>
);

export default AppRouters;