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
        <div className="col-lg-5 col-xxl-8 mb-30 pb-10 pb-lg-0">
          {/* <img src="images/skill/skill.jpg" alt="Skill" /> */}
          <InfoMedia
            className="contact-media "
            image="images/skill/bsecurity.jpg"
            title="Ensuring the safety and integrity of your operations is our top priority. Our team employs cutting-edge strategies to protect your data and assets, giving you peace of mind."
            info="Business Security "
          />
          <InfoMedia
            className="contact-media"
            image="images/skill/career.jpg"
            info="Career Development "
            title="Ensuring the safety and integrity of your operations is our top priority. Our team employs cutting-edge strategies to protect your data and assets, giving you peace of mind."
          />
          <InfoMedia
            className="contact-media"
            image="images/skill/innovation.jpg"
            title="Innovation is at the heart of everything we do. We are constantly exploring new ideas and technologies to help your business stay ahead of the curve and achieve sustainable growth"
            info="Business Innovation "
          />
        </div>
        <div className="col-lg-4 col-xxl-6 me-xl-auto">
          <SecTitle>
            {/* <i className="fas fa-bring-forward" /> */}
            The Great Company Skill
          </SecTitle>
          <SecSubTitle className="h1 text-capitalize">
            Connecting People And Build Technology
          </SecSubTitle>
          <p className="mb-4 pb-1">
            We are dedicated to connecting individuals and building technology
            that enhances lives. Our approach integrates a wide range of
            meta-services to streamline processes and enhance user experience.
            We prioritize interactive customer service and maintain high
            standards to ensure reliable and effective solutions.
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