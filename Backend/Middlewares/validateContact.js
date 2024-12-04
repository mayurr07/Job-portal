// middlewares/validateContact.js

const validateContact = (req, res, next) => {
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false
      });
    }
  
    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format.",
        success: false
      });
    }
  
    next();
  };
  
  export default validateContact;
  