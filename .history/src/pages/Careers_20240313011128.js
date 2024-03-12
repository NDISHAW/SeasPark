import React, { Fragment, useEffect, useState } from "react";
import { Seo, Breadcrumb, ScrollTopBtn } from "../components";
import {
  HeaderTwo,
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
} from "../containers";
import CareerOne from "../containers/Careers/CareerOne";
import NotFound from "../containers/NotFound.svg";
import { firestore } from "../utils/firebase.config";
import { collection, getDocs, query } from "firebase/firestore";

export default function Careers() {
    const [loading, setLoading] = useState(true);
      const [careers, setCareers] = useState(false);
      const getAllCareers = async () => {
        const items = await getDocs(query(collection(firestore, "careers")));
        console.log(items);
        return items.docs.map((doc) => doc.data());
      };

      useEffect(() => {
        getAllCareers();
        // setCareers(data)
      }, []);

    useEffect(() => {
      // Simulate fetching data
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 10000); // Example delay of 2 seconds
    }, []);
  return (
    <Fragment>
      <Seo title="Careers" />
      <HeaderTwo />
      <Breadcrumb pageName="Careers" bgImage="images/careers/career2.jpg" />
      <div>
        <CareerOne
          className="space-top space-extra-bottom background-image"
          style={{
            backgroundImage: "url(images/bg/process-bg-1-1.jpg)",
          }}
          careers={[careers]}
        />
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
