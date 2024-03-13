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
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export default function Careers() {
    // const [{ careers }, dispatch] = useStateValue();
    const [loading, setLoading] = useState(true);
      // const [careers, setCareers] = useState(false);
        const getAllCareers = async () => {
          try {
            const items = await getDocs(
              query(collection(firestore, "careers"))
            );
            const careerData = items.docs.map((doc) => doc.data());
            setCareers(careerData);
            // dispatch({
            //   type: actionType.SET_CAREERS,
            //   careers: items,
            // });
            setLoading(false); // Set loading to false after data is fetched
          } catch (error) {
            console.error("Error fetching careers:", error);
          }
        };

      useEffect(() => {
        getAllCareers();
        // setCareers(data)
      }, []);
console.log('====================================');
console.log(careers);
console.log('====================================');
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
          careers={careers}
        />
      </div>
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
