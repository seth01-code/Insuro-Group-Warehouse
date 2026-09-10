# Insuro Africa -Smart Fulfilment Landing Page

Next.js 16 + Tailwind CSS 4.

## Run locally

```
npm install
npm run dev
```

## Google Sheets setup

1. Create a Google Cloud service account, enable the **Google Sheets API**, and generate a JSON key.
2. Create your Google Sheet and add this exact header row (row 1):

   | Date Submitted | Company Name | Business Type | Type of Goods | Estimated Volume | Email | Preferred Storage Location | Time of Need | Additional Information | Status | Assigned Rep |

3. Share the sheet with the service account's `client_email` (Editor access).
4. Copy `.env.example` to `.env.local` and fill in:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` -the service account's email
   - `GOOGLE_PRIVATE_KEY` -the service account's private key (keep the `\n` escapes, wrap in quotes)
   - `GOOGLE_SHEET_ID` -the ID from the sheet's URL (`https://docs.google.com/spreadsheets/d/THIS_PART/edit`)
   - `GOOGLE_SHEET_NAME` -the tab name (defaults to `Sheet1`)

The form posts to `/api/submit-lead`, which appends a row to the sheet on each submission.

## Deploy

Push to a Git repo and import into Vercel, then add the same four env vars in
Project Settings → Environment Variables.
