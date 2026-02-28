/**
 * Utility to submit form data to a Google Apps Script Web App.
 *
 * Google Sheet Setup:
 *   Sheet 1 (name: "Beta Waitlist")  → Collects emails for beta testing
 *   Sheet 2 (name: "Feature Suggestions") → Collects "Suggest a Feature" submissions
 *
 * Environment Variables (set in .env):
 *   VITE_GOOGLE_SHEET_ID    → The Google Sheet ID from the URL
 *   VITE_GOOGLE_SCRIPT_URL  → The deployed Google Apps Script Web App URL
 */

export type SubmissionType = 'waitlist' | 'suggestion';

interface SubmissionData {
    type: SubmissionType;
    email?: string;
    content?: string;
}

// Sheet name mapping — matches the tab names in the Google Sheet
const SHEET_NAMES: Record<SubmissionType, string> = {
    waitlist: 'Beta Waitlist',
    suggestion: 'Feature Suggestions',
};

// Read from Vite env (prefixed with VITE_ to be exposed to the client)
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || '';

export const submitToGoogleSheets = async (data: SubmissionData): Promise<{ success: boolean; message?: string }> => {
    if (!SCRIPT_URL) {
        console.warn('Google Apps Script URL not configured (VITE_GOOGLE_SCRIPT_URL). Submission skipped.');
        // Simulate a successful submission if no URL is provided (dev mode)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Mock submission successful (No URL configured)' });
            }, 1000);
        });
    }

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                sheetName: SHEET_NAMES[data.type],
                sheetId: SHEET_ID,
                timestamp: new Date().toISOString(),
            }),
        });

        // With mode: 'no-cors', we can't read the response body,
        // but the request will be sent.
        return { success: true };
    } catch (error) {
        console.error('Submission error:', error);
        return { success: false, message: 'Failed to submit. Please try again later.' };
    }
};
