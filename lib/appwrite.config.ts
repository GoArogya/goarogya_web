import * as sdk from "node-appwrite";

// When using process.env in Next.js, we need to be careful with undefined values
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

// Initialize the Appwrite client
const client = new sdk.Client();

// Check if required variables are defined before setting them
if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  throw new Error("Required Appwrite environment variables are missing");
}

// Set the endpoint, project ID, and API key
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

// Export the initialized services
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

// Export environment variables for use in other files
export { 
  ENDPOINT, 
  PROJECT_ID, 
  DATABASE_ID, 
  PATIENT_COLLECTION_ID, 
  DOCTOR_COLLECTION_ID, 
  APPOINTMENT_COLLECTION_ID, 
  BUCKET_ID 
};