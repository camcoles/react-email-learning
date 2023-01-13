import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from './emails/email';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  auth: { user: email, pass: pass },
  secure: false,
  tls: { ciphers: 'SSLv3' }
});

const emailHtml = render(<Email />);

export const options = {
  from: 'huddle@aarsleff.co.uk',
  to: email,
  subject: 'Test',
  html: emailHtml,
};

//Notes: render function is changing email template. When file is sent from react email dev environment email is different.



