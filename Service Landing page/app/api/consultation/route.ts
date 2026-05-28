import { NextResponse } from "next/server";

const requiredFields = [
  "firstName",
  "email",
  "whatsAppNumber",
  "businessName",
  "websiteOrFacebookPage",
] as const;

type ConsultationPayload = {
  firstName?: string;
  email?: string;
  whatsAppNumber?: string;
  businessName?: string;
  websiteOrFacebookPage?: string;
  message?: string;
};

const flodeskSubmitUrl =
  "https://form.flodesk.com/forms/6a0c5355613f067ca55c5a36/submit";

export async function POST(request: Request) {
  const payload = (await request.json()) as ConsultationPayload;

  for (const field of requiredFields) {
    const value = payload[field]?.trim();
    if (!value) {
      return NextResponse.json(
        { message: `The ${field} field is required.` },
        { status: 400 },
      );
    }
  }

  const formData = new URLSearchParams();
  formData.set("email", payload.email!.trim());
  formData.set("fields.firstName", payload.firstName!.trim());
  formData.set("fields.", payload.websiteOrFacebookPage!.trim());
  formData.set("fields.businessName", payload.businessName!.trim());
  formData.set("fields.whatsappNumber", payload.whatsAppNumber!.trim());
  formData.set("confirm_email_address", "");

  const upstream = await fetch(flodeskSubmitUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "User-Agent": "Digital Chitra Landing Page",
      Origin: "http://localhost:3000",
      Referer: "http://localhost:3000/",
    },
    body: formData.toString(),
    redirect: "follow",
  });

  if (!upstream.ok) {
    const details = await upstream.text();
    return NextResponse.json(
      {
        message:
          "The form could not be submitted to Flodesk right now. Please try again.",
        details: details.slice(0, 400),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
