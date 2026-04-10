import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Resume from '@/models/Resume';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const password = formData.get('password');

    // Security Check
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized. Invalid Admin Password." }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await dbConnect();

    // Clear any existing resume first to only keep the latest
    await Resume.deleteMany({});

    await Resume.create({
      fileName: file.name,
      contentType: file.type,
      data: buffer,
    });

    return NextResponse.json({ success: true, message: "Resume uploaded successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upload resume" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    await dbConnect();
    const resume = await Resume.findOne().sort({ createdAt: -1 });

    if (!resume) {
      return NextResponse.json({ error: "No resume found" }, { status: 404 });
    }

    const disposition = action === "download" ? "attachment" : "inline";

    return new NextResponse(resume.data, {
      status: 200,
      headers: {
        'Content-Type': resume.contentType,
        'Content-Disposition': `${disposition}; filename="${resume.fileName}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching resume" }, { status: 500 });
  }
}
