import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL, // your email
                pass: process.env.SMTP_PASSWORD, // your email password or app password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.CONTACT_RECIPIENT_EMAIL, // recipient email (e.g., your admin email)
            subject: `Contact Form Submission: ${subject}`,
            html: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            message: "Your message has been sent successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Error in submitContactForm:", error);
        return res.status(500).json({
            message: "An error occurred while sending your message. Please try again later.",
            success: false,
        });
    }
};
