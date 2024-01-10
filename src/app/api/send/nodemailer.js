import nodemailer from "nodemailer";

export async function postHandler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    // Set up the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // You can handle replies here or in a separate route
      // Note: Handling replies might involve setting up an email server that listens for incoming emails.

      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
