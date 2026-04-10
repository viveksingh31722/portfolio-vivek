import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Message from '@/models/Message';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Save to MongoDB
    const db = await dbConnect();
    if (db) {
      await Message.create({ name, email, subject, message });
    }

    // 2. Send Email via Nodemailer
    if (process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_google_app_password') {
      const cleanPass = process.env.EMAIL_PASS.replace(/\s+/g, ''); // Strip accidental spaces
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'viveksingh31722@gmail.com',
          pass: cleanPass
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'viveksingh31722@gmail.com',
        replyTo: email,
        subject: `New Portfolio Message: ${subject} (from ${name})`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Nodemailer: EMAIL_PASS not set in environment. Skipping email sending.");
    }

    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact API Nodemailer Error Detail:", error.message);
    return NextResponse.json({ error: "Failed to process the request due to an email authentication or server error." }, { status: 500 });
  }
}
