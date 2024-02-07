
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();


// const app = express();
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());

// app.post("/send-email", (req, res) => {
//   const { toEmail, cartItems, tot ,} = req.body;
//   const sgMail = require("@sendgrid/mail");
//   sgMail.setApiKey(
//     "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"
//   );
//   const msg = {
//     to: toEmail, // Change to your recipient
//     bcc: "info@hckl.co.ke",
//     from: "info@hckl.co.ke", // Change to your verified sender
//     subject: "Shopping Cart Order Confirmation",

//     html: `<table style="width: 100%; border-collapse: collapse;">

//           <thead>
//           <tr>
//             <td colspan="3">
//               <img src="https://hckl.co.ke/wp-content/uploads/2018/06/logo-web-1.png" alt="Header Image" style="width: 100%; max-width: screen; items-justify: center;">
//             </td>
//           </tr>
//             <tr>
//             <th style="border: 3px solid #2B89D0; padding: 8px;">Image</th>
//               <th style="border:3px solid #2B89D0; padding: 8px;">Title</th>
//               <th style="border: 3px solid #2B89D0; padding: 8px;">Price</th>
//               <th style="border: 3px solid #2B89D0; padding: 8px;">Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${cartItems
//               .map(
//                 (item) => `
//                   <tr>
//                   <td style="border: 1px solid #2B89D0; padding: 1px;">
//               <img src=${
//                 item?.imageURL 
//               } alt="Product Image" style="width: 50%; max-width: 100%;">
//             </td>
//                     <td style="border: 1px solid #2B89D0; padding: 10px;">${
//                       item.title
//                     }</td>
//               <td style="border: 1px solid #2B89D0; padding: 30px;"><strong>KSH   ${
//                 item.price
//               }</strong></td>

//                     <td style="border: 1px solid #2B89D0; padding: 10px;">${
//                       item.qty
//                     }</td>
//                   </tr>
//                 `
//               )
//               .join("")}
//             <tr>
//               <td colspan="3" style="text-align: center; border: 3px solid #2B89D0; padding: 20px;"><strong>Total price:</strong></td>
//               <td style="border: 8px solid #2B89D0; padding: 30px;"><strong>KSH   ${tot}</strong></td>
//             </tr>
//           </tbody>
//         </table>`,
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent", res);
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500);
//     });
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });



// server.js


// const express = require('express');
// const multer = require('multer');
// const sgMail = require('@sendgrid/mail');
// require('dotenv').config();
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Initialize SendGrid with your API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey(
//   "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"
// );

// // Multer middleware to handle file uploads
// const upload = multer({ dest: 'uploads/' });
// // Use CORS middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow requests from this origin
//   })
// );

// // Endpoint to handle email sending
// app.post("/api/send-email", upload.single("my_file"), async (req, res) => {
//   try {
//     const { fullName, email, phoneNumber, jobNumber } = req.body;
//     const attachment = req.file;

//     if (!attachment || !attachment.buffer) {
//       return res.status(400).send("No file uploaded or file is empty.");
//     }

//     const msg = {
//       to: "abraham.ict@seaspark.co.ke",
//       from: email,
//       subject: "Your Subject",
//       text: "Your Message", // You can customize the message here
//       attachments: [
//         {
//           content: attachment.buffer.toString("base64"),
//           filename: attachment.originalname,
//           type: attachment.mimetype,
//           disposition: "attachment",
//         },
//       ],
//     };

//     await sgMail.send(msg);
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const sgMail = require("@sendgrid/mail");
const fs = require("fs");

sgMail.setApiKey("SENDGRID_KEY");

let attachments = fs.readFileSync(`${__dirname}/note.pdf`).toString("base64");

const sendEmail = () => {
  const msgConfig = {
    to: "Email to",
    from: "EMAIL_FROM",
    subject: "Sendgrind test mail",
    text: "This is a test mail from nodejs using sendgrid",
    attachments: [
      {
        content: attachments,
        filename: "note.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };
  sgMail
    .send(msgConfig)
    .then((res) => {
      console.log("Email Sent to: ", msgConfig.to);
    })
    .catch((err) => {
      console.log(err);
    });
};

sendEmail();
