import nodemailer from "nodemailer";
import dotenv from "dotenv";
import hbs from "nodemailer-express-handlebars";
import path from "path";

// Load environment variables from .env file
dotenv.config();


// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
    port: process.env.EMAIL_PORT || 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Configure handlebars for email templates
const handlebarOptions = {
    viewEngine: {             
        extName: ".handlebars",            
        partialsDir: path.resolve("./views"),        
        defaultLayout: false,
    },
    viewPath: path.resolve("./views"),     
    extName: ".handlebars",
};

// Use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

const sendEmail = async (to, subject, code) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: to,
            subject: subject,
            template: "email", // This should match your template filename without extension
            context: {
                code: code,
            },
        });
        console.log("Message sent: " + info.response);
        return info;   // Return the info object for further handling if needed
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export default sendEmail;