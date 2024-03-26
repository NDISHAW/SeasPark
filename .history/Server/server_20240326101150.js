const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const { Pool } = require("pg");
const knex = require("knex");
require("dotenv").config();

const app = express();
// Use CORS middleware
app.use(
  cors({
    // origin: "http://localhost:3000", // Allow requests from this origin
    // origin: "https://seaspark.co.ke/",
  })
);

// Middleware to parse JSON bodies
app.use(express.json());
// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "lon106.truehost.cloud", // Update with your SMTP host
  port: 465, // Update with your SMTP port
  // secure: true, // Update based on your SMTP settings
  auth: {
    user: process.env.Uname, // Update with your email address
    // pass: "evzr dkch zjna bswm", // Update with your email password
    pass: process.env.Pass,
  },
  debug: true,
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

// Route to handle sending email with PDF attachment
app.post("/sendEmail", upload.single("pdfFile"), async (req, res) => {
  try {
    const { email, fullName, phoneNumber, jobNumber, message, title } =
      req.body;
    const pdfFile = req.file;

    // Setup email data
    const mailOptions = {
      from: email,
      to: "hr@seaspark.co.ke",
      subject: "Job Application",
      html: `
        <h3>Job title: ${title} {" "} Job id ${jobNumber}</h3>
        <p><span>Full Names: ${fullName} </span> </p></br>
        <p><span>phoneNumber: ${phoneNumber} </span> </p>
        <p><span type={email}>SenderEmail: ${email} </span> </p>
        <p>${message}</p>
      
      `,
      attachments: [
        {
          filename: pdfFile.originalname,
          content: pdfFile.buffer, // Use file buffer for content
        },
      ],
    };
    console.log("Mail options:", mailOptions);
    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.post("/sendContactEmail", async (req, res) => {
  try {
    const { from_name, user_email, phone, subject, message } = req.body;
    console.log("====================================");
    console.log(from_name);
    console.log("====================================");
    // Setup email data
    const mailOptions = {
      from: user_email,
      to: "hr@seaspark.co.ke",
      subject: subject || "Contact Form Submission",
      html: `
        <h3>Message from SEASPARK.CO.KE Contact Form</h3>
        <div>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        </div>
        
        <div>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`😎😇Server is running on port ${PORT} 😇😎`);
});
