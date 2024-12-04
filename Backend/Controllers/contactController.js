// controllers/contactController.js

import nodemailer from 'nodemailer';
import { Contact } from '../Models/contactModel.js'; // Optional, if storing in DB

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Optional: Save the contact data to a database
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    await newContact.save();

    // Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email here
        pass: process.env.EMAIL_PASS, // Your email password here
      },
    });

    const mailOptions = {
      from: email,  // From user's email
      to: process.env.EMAIL_USER,  // Your email here
      subject: subject,
      text: `Message from: ${name}\nEmail: ${email}\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: 'Your message has been sent successfully!',
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Something went wrong. Please try again later.',
      success: false
    });
  }
};
