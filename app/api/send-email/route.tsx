import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  // payload
  await resend.emails.send({
    // ! Cannot send emails from Gmail. Must be from a domain that you own
    from: '',
    to: '',
    subject: '',
    react: <WelcomeTemplate name="Abz" />
  })

  return NextResponse.json({});
}