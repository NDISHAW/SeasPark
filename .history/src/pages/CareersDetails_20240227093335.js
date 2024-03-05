import React, { Fragment, useState, useEffect } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {  ProjectSingle, FooterOne, HeaderTwo } from "../containers";
import { useParams } from "react-router-dom";
// import careers from "../data/careers.json";
import axios from "axios";

export default function CareersDetails() {
      const [careers, setCareers] = useState([]);
      const { id } = useParams();

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/api/careers/${id}`
            );
            setCareers(response.data);
          } catch (error) {
            console.error("Error fetching job openings:", error);
          }
        };
        fetchData();
      }, [id]);
  const career = careers.find(
    (career) => career.id === id.toString());
  return (
    <Fragment>
      <Seo title="Career-details" />
      <HeaderTwo />
      <Breadcrumb
        pageName="Career Details"
        bgImage="/images/careers/careerbg.jpg"
      />
      {/* <ProjectSingle className="space-top space-extra-bottom" /> */}
      {careers && (
        <ProjectSingle
          className="space-top space-extra-bottom"
          career={career}
        />
      )}
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
