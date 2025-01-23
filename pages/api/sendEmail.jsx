import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {  message } = req.body;
    // Create the transporter using Gmail (replace with your own SMTP provider if needed)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'radithyugan22@gmail.com',  // Replace with your email
        pass: 'lpjpgkrvykjkpdfc',    // Replace with your Gmail App Password
      },
    });
    const mailOptions = {
      from: "radithyugan22@gmail.com",              // Sender's email (the one that filled the form)
      to: 'radithyugan22@gmail.com', // Replace with your recipient email
      subject: 'New Contact Form Message',
      text: message,
    };
    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}