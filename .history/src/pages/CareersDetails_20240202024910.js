import React from 'react'

export default function CareersDetails() {
  return (
    <Fragment>
      <Seo title="Project Details" />
      <HeaderOne />
      <Breadcrumb
        pageName="Project Details"
        bgImage="images/breadcumb/breadcumb-bg.jpg"
      />
      <ProjectSingle className="space-top space-extra-bottom" />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
}
