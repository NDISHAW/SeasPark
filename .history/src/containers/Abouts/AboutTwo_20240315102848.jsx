import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  ProgressOne,
  InfoMedia
} from '../../components';

const AboutTwo = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-7 col-xxl-8 mb-30 pb-10 pb-lg-0">
          {/* <img src="images/skill/skill.jpg" alt="Skill" /> */}
          <InfoMedia
            className="contact-media "
            image="images/skill/bsecurity.jpg"
            info="Ensuring the safety and integrity of your operations is our top priority. Our team employs cutting-edge strategies to protect your data and assets, giving you peace of mind."
            title="Data Security "
          />
          <InfoMedia
            className="contact-media"
            image="images/skill/career.jpg"
            title="Career Development "
            info="Ensuring growth and development of our employees is at the core of our success.  We create enough space for our teams to deploy their expertise and play at their very best levels. "
          />
          <InfoMedia
            className="contact-media"
            image="images/skill/innovation.jpg"
            info="Innovation is at the heart of everything we do. We are constantly exploring new ideas and technologies to help your Clients stay ahead of the curve and achieve sustainable growth in the market"
            title="Digital Innovation "
          />
        </div>
        <div className="col-lg-5 col-xxl-4 me-xl-auto">
          <SecTitle>
            {/* <i className="fas fa-bring-forward" /> */}
            Seaspark
          </SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            Building Technology to connect People and Business
          </SecSubTitle>
          <p className="mb-4 pb-1">
            We are dedicated to building technology to connect people and
            Business so as to enhance live. Our approach integrates a wide range
            of meta-services  to streamline processes and enhance user
            experience. We prioritize interactive customer service and maintain
            high standards to ensure reliable and effective solutions.
          </p>

          {/* <ProgressOne title="Business Security" now={60} />
          <ProgressOne title="Career Development" now={88} />
          <ProgressOne title="Business Inovation" now={90} /> */}
        </div>
      </div>
    </div>
  </div>
);

export default AboutTwo;