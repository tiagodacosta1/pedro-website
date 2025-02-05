import { NextResponse } from "next/server"
import { Resend } from "resend"

// Replace 'your_resend_api_key_here' with your actual Resend API key
const resend = new Resend("re_PjXAsV7i_7XqnDv2DHAgZYTAqWZAvZeGd")

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()

        const data = await resend.emails.send({
            from: "Your Name <onboarding@resend.dev>", // Use the default sender or a verified domain
            to: ["tiagocosta4823@gmail.com"], // Your receiving email
            subject: subject || "New Contact Form Submission",
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 })
    }
}

