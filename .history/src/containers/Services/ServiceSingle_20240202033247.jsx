import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {List} from '../../components';
import {SidebarTwo} from '../';

// FAQ Data
import faqData from '../../data/faq.json';

const ServiceSingle = ({ ...restProps }) => (
  <div {...restProps}>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-8">
          <div className="mb-3 pb-3">
            <img src={
                teamMember
                  ? "/" + teamMember.image
                  : "/images/team/default-image.jpg"
              }
            src="images/service/sr-d-1-1.jpg" alt="Project" />
          </div>
          <h2 className="h4">SAP Services</h2>
          <p>
            Our Digital Business Services is ready to help you build, succeed as
            an Intelligent Enterprise and accelerate faster value creation with
            greater visibility,
          </p>
          <div className="row gx-0 mb-4 pb-2 pt-3">
            <div className="col-xl-6">
              <img
                src="images/service/sap.jpg"
                alt="project"
                className="w-100"
              />
            </div>
            <div className="col-xl-6">
              <div className="service-list-box">
                <h3 className="h5 title">Service Features</h3>
                <List className="list-style3">
                  <List.Item>
                    <i className="fal fa-check-circle" /> Implementation
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> SAP Upgrade &
                    Migration
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Roll Out
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Expert Consultancy
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> focus and agility.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> License sale
                  </List.Item>
                </List>
              </div>
            </div>
          </div>
          <h3 className="h5">
            <i className="fal fa-check-circle" /> SAP Implementation - End to
            End SAP Implementation Projects
          </h3>
          <p>
            Our Implementation Services portfolio assists organizations in
            business transformation initiatives. Services that will help you
            align with your strategic business objectives, enhance productivity,
            reduce Total Cost of Ownership (TCO) and increase ROI. The focus is
            on leveraging our set of services using SAP technology to maximize
            the benefits our services extend to the organization: from
            intellectual capital, to meeting regulatory requirements and to
            improving business relationships with clients. Our blend of industry
            best practices, proven implementation methodologies, and modern
            configuration tools can enable you to fast-track the deployment of
            your SAP ERP solution.
          </p>
          <p>
            Completely unleash frictionless data via end-to-end services.
            Continually unleash virtual e-tailers through magnetic core
            competencies. Interactively engage distributed alignments via
            focused alignments.
          </p>
          <div className="row gx-0 mb-4 pb-2 pt-3">
            <div className="col-xl-6">
              <img
                src="images/service/sap.jpg"
                alt="project"
                className="w-100"
              />
            </div>
            {/* Services Features */}
            <div className="col-xl-6">
              <div className="service-list-box">
                <h3 className="h5 title"> Features</h3>
                <List className="list-style3">
                  <List.Item>
                    <i className="fal fa-check-circle" /> Implementation Project
                    Plan and monitor the execution.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Configure, set up and
                    test the underlying technical infrastructure.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Define, design, map
                    and configure business processes.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Customize business
                    processes if needed.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Perform Change
                    Management through effective Knowledge Transfer and end user
                    education programs.
                  </List.Item>
                  <List.Item>
                    <i className="fal fa-check-circle" /> Successful 'Go Live'
                    and support
                  </List.Item>
                </List>
              </div>
            </div>
          </div>
          <div className="row pt-3 mb-30 pb-10 gy-30">
            <div className="col-md-6">
              <img src="images/service/sr-d-1-3.jpg" alt="project" />
            </div>
            <div className="col-md-6">
              <img src="images/service/sr-d-1-4.jpg" alt="project" />
            </div>
          </div>
          <Accordion
            defaultActiveKey={faqData[0].questionId}
            className="accordion-style1 layout2"
          >
            {faqData.map((item) => (
              <Accordion.Item key={item.questionId} eventKey={item.questionId}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <div className="col-lg-4">
          <SidebarTwo />
        </div>
      </div>
    </div>
  </div>
);

export default ServiceSingle;