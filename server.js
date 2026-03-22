import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mridul7876800396@gmail.com', // Sender
      pass: 'qfsf eoww inrz euzp' // Hardcoding exact raw password to completely bypass ENV bugs
    }
  });

  const mailOptions = {
    from: 'mridul7876800396@gmail.com',
    to: 'mridulsharma1712006@gmail.com',
    subject: `Portfolio Contact from ${name}: ${subject || 'No Subject'}`,
    text: `You have received a new message from your portfolio website.

From: ${name} (${email})

Message:
${message}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});