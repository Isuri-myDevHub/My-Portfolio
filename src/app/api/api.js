// api.js
import nodemailer from "nodemailer";

const fromeEmail = process.env.EMAIL;
const emailPass = process.env.EMAIL_PASS;

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: fromeEmail,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: fromeEmail,
    to: email,
    subject: subject,
    html: `
      <p>You have a new message from ${data.name} (${data.email}):</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <p>We will connect with you soon!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
