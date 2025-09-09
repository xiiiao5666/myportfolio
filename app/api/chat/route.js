import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: 'Pesan tidak boleh kosong.' }, { status: 400 });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: message } // langsung saja, tidak perlu "Jawab dalam Bahasa Indonesia: ..."
            ]
          }
        ]
      })
      
    });

    const data = await response.json();

    console.log('DEBUG Gemini API Response:', data); // Tambahkan ini
    
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf, saya tidak dapat menjawab pertanyaan itu.';
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error saat menghubungi Gemini:', error);
    return NextResponse.json({ reply: 'Terjadi kesalahan saat menghubungi AI.' }, { status: 500 });
  }
}
