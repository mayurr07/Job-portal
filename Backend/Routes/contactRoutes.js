// routes/contactRoutes.js

import express from 'express';
import { submitContactForm } from '../Controllers/contactController.js';
import validateContact from '../Middlewares/validateContact.js';

const router = express.Router();

// POST route to handle contact form submission
router.post('/contact', validateContact, submitContactForm);

export default router;
