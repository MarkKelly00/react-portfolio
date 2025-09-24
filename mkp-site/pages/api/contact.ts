import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const { name, email, company, message, interest } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  // SendGrid integration (optional): set SENDGRID_API_KEY and CONTACT_TO in env
  const apiKey = process.env.SENDGRID_API_KEY;
  const to = process.env.CONTACT_TO;
  if (apiKey && to) {
    try {
      sgMail.setApiKey(apiKey);
      await sgMail.send({
        to,
        from: to, // or a verified sender address
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` @ ${company}` : ''}`,
        text: `${message}\n\nService of Interest: ${interest ?? '-'}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company ?? '-'} </p><p><strong>Service of Interest:</strong> ${interest ?? '-'}</p><p style="white-space:pre-line">${message}</p>`
      });
      return res.status(200).json({ ok: true });
    } catch (err: any) {
      console.error('SendGrid error', err?.response?.body || err);
      return res.status(500).json({ ok: false });
    }
  }
  // Fallback log only
  console.log('Contact form submission (no mail provider configured):', { name, email, company, message, interest });
  return res.status(200).json({ ok: true, note: 'Email provider not configured' });
}


