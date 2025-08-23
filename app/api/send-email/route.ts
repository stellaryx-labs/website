import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  console.log("sending email via resend...");

  try {
    const { to, subject, html } = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'contact@stellaryxlabs.com', // This needs to be a verified domain in Resend
      to: [to],
      subject: subject,
      html: html,
    })

    console.log('Email sent successfully:', emailResult)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: emailResult.data?.id 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
