import React from 'react'

export default function Sendgrid() {

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(
      "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"
    );
  return (
    <div>Sendgrid</div>
  )
}
