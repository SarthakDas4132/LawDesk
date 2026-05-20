import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Connect this to your Python backend!
    // Example of how you will connect it later:
    /*
    const response = await fetch(`${process.env.PYTHON_BACKEND_URL}/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    */

    // For now, just log it and simulate success
    console.log(`[Waitlist Entry] New signup: ${email}`);
    
    // Simulate a slight network delay so the loading spinner looks good
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
