import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, firmName, message } = body;

    // Basic validation
    if (!name || !email || !message || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Missing required fields or invalid email' },
        { status: 400 }
      );
    }

    // TODO: Connect this to your Python backend!
    // Example of how you will connect it later:
    /*
    const response = await fetch(`${process.env.PYTHON_BACKEND_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, firmName, message })
    });
    */

    // For now, just log it and simulate success
    console.log(`[Contact Form Submission]`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Firm: ${firmName}`);
    console.log(`Message: ${message}`);
    
    // Simulate a network delay so the loading state is visible in development
    if (process.env.NODE_ENV === 'development') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
