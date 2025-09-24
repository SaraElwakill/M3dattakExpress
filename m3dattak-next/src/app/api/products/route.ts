import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Load credentials from environment variables for security.
// Set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_PROJECT_ID in your environment.
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, '\n'),
  project_id: process.env.GOOGLE_PROJECT_ID,
};

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // TODO: Replace with your actual spreadsheet ID and range
    const spreadsheetId = '13han0B2QLYvaR6MwiSD9VcXMho0Uq9h4KrHTw2t0sOY'; 
    const range = 'Products!A:E'; // Adjust this range to match your data

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return new NextResponse(JSON.stringify({ message: 'No data found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const headers = rows[0];
    const products = rows.slice(1).map(row => {
      const product: { [key: string]: string | undefined } = {};
      headers.forEach((header, index) => {
        product[header] = row[index];
      });
      return product;
    });
    console.log(products);
    
    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
