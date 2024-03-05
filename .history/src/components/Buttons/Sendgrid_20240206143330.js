import React from 'react'

export default function Sendgrid() {

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey("YOUR_SENDGRID_API_KEY");
  return (
    <div>Sendgrid</div>
  )
}
