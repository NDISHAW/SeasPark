

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const { Pool } = require("pg");
const knex = require("knex");

const app = express();
 // Use CORS middleware
 app.use(
   cors({
     origin: "https://seaspark.co.ke", // Allow requests from this origin
     
   })
 );

// Middleware to parse JSON bodies
app.use(express.json());
// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



// PostgreSQL database configuration
const pool = new Pool({
  user: "ndishaw",
  host: "localhost",
  database: "seaspark1",
  password: "ndishaw",
  port: 5432, // Default PostgreSQL port
});

// Knex.js configuration
const knexInstance = knex({
  client: "pg",
  connection: {
    user: "ndishaw",
    host: "localhost",
    database: "seaspark1",
    password: "ndishaw",
    port: 5432,
  },
});
// Create table for job openings if not exists
async function createJobOpeningsTable() {
  const tableExists = await knexInstance.schema.hasTable("job_opening");
  if (!tableExists) {
    await knexInstance.schema.createTable("job_openings", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("location").notNullable();      
      table.string("experience").notNullable();
      table.specificType("descriptions", "text[]");
      table.timestamp("created_at").defaultTo(knexInstance.fn.now());
      table.specificType("requirements", "text[]");
      table.string("category").notNullable();
      table.string("address").notNullable();
    });
    console.log("Job openings table created successfully");
  }
}

// createJobOpeningsTable();


// API endpoint to get all job openings
app.get('/api/careers', async (req, res) => {
  try {
    const jobOpenings = await knexInstance('job_openings').select('*');
    res.json(jobOpenings);
  } catch (error) {
    console.error('Error getting job openings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// API endpoint to get a specific job opening by ID
app.get('/api/careers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const jobOpening = await knexInstance('job_openings').where({ id }).first();
    if (!jobOpening) {
      res.status(404).json({ error: 'Job opening not found' });
    } else {
      res.json(jobOpening);
    }
  } catch (error) {
    console.error('Error getting job opening:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint to create a new job opening
app.post('/api/careers', async (req, res) => {
  const { title, descriptionList, requirementList, location, address, category, experience } = req.body;
  try {
    const newJobOpening = await knexInstance("job_openings")
      .insert({ title, descriptions: descriptionList, requirements: requirementList, location, address, category, experience })
      .returning("*");
    res.json(newJobOpening[0]);
  } catch (error) {
    console.error("Error creating job opening:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API endpoint to delete a job opening
app.delete('/api/careers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedJobOpening = await knexInstance('job_openings').where({ id }).del().returning('*');
    if (deletedJobOpening.length === 0) {
      res.status(404).json({ error: 'Job opening not found' });
    } else {
      res.json(deletedJobOpening[0]);
    }
  } catch (error) {
    console.error('Error deleting job opening:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "lon106.truehost.cloud", // Update with your SMTP host
  port: 465, // Update with your SMTP port
  // secure: true, // Update based on your SMTP settings
  auth: {
    user: "abraham.it@seaspark.co.ke", // Update with your email address
    // pass: "evzr dkch zjna bswm", // Update with your email password
    pass: "@wagakungashosho",
  },
  debug: true,
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

// Route to handle sending email with PDF attachment
app.post("/sendEmail", upload.single("pdfFile"), async (req, res) => {
  try {
    const { email, fullName, phoneNumber, jobNumber, message, title} =
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`😎😇Server is running on port ${PORT} 😇😎`);
});


