import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type LeadPayload = {
  companyName: string;
  businessType: string;
  typeOfGoods: string;
  estimatedVolume: string;
  email: string;
  preferredLocation: string;
  timeOfNeed: string;
  additionalInfo: string;
};

const REQUIRED_FIELDS: (keyof LeadPayload)[] = [
  "companyName",
  "businessType",
  "typeOfGoods",
  "estimatedVolume",
  "email",
  "preferredLocation",
  "timeOfNeed",
];

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || !String(body[field]).trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 },
      );
    }
  }

  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID,
    GOOGLE_SHEET_NAME,
  } = process.env;

  if (
    !GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !GOOGLE_PRIVATE_KEY ||
    !GOOGLE_SHEET_ID
  ) {
    console.error("Missing Google Sheets environment variables.");
    return NextResponse.json(
      { error: "Server is not configured to accept requests right now." },
      { status: 500 },
    );
  }

  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // .env values often escape newlines as literal \n -restore them.
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const dateSubmitted = new Date().toISOString();
    const sheetTab = GOOGLE_SHEET_NAME || "Sheet1";

    // Column order must match the sheet's header row exactly:
    // Date Submitted | Company Name | Business Type | Type of Goods |
    // Estimated Volume | Email | Preferred Storage Location | Time of Need |
    // Additional Information | Status | Assigned Rep
    const row = [
      dateSubmitted,
      body.companyName,
      body.businessType,
      body.typeOfGoods,
      body.estimatedVolume,
      body.email,
      body.preferredLocation,
      body.timeOfNeed,
      body.additionalInfo || "",
      "New",
      "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${sheetTab}!A:K`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to write lead to Google Sheets:", err);
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again shortly." },
      { status: 502 },
    );
  }
}
