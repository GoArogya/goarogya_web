GoArogya Healthcare Management System
Welcome to GoArogya – a complete solution for managing healthcare appointments with ease and efficiency. Follow this guide step by step to build and deploy your healthcare management application. Join the GoArogya community for support, updates, and more!

Table of Contents
Introduction
GoArogya is a comprehensive healthcare patient management application designed to streamline the interaction between patients and healthcare providers. This application allows patients to:

Register and create personal profiles.

Easily book and manage appointments with doctors.

Receive SMS notifications upon appointment confirmation.

For administrators, GoArogya provides robust tools to manage appointments by confirming, scheduling, or canceling them as needed—all built using Next.js for a seamless, modern experience.

If you’re new to the project or run into issues, join our supportive community on Discord to connect with other team members and healthcare enthusiasts.

Tech Stack
GoArogya leverages a powerful combination of modern technologies to deliver a responsive and secure solution:

Next.js – A React framework used for rendering and routing.

Appwrite – A backend server for managing databases, file storage, and authentication.

TypeScript – Bringing static typing to ensure code quality and maintainability.

TailwindCSS – For crafting responsive and visually appealing interfaces.

ShadCN – Component libraries to speed up UI development.

Twilio – To send SMS notifications and keep patients informed.

Features
Patient Registration:
Users can sign up and create a secure profile as a patient.

Book Appointments:
Patients can schedule appointments with doctors at their convenience. Multiple appointments can be booked as needed.

Admin Management:
Administrators have a dedicated dashboard to view all scheduled appointments and manage them effectively.

Appointment Confirmation & Scheduling:
Admins can confirm appointments and set specific timings to ensure clarity and avoid scheduling conflicts.

Appointment Cancellation:
If plans change, administrators can cancel appointments promptly.

SMS Notifications:
Integrated with Twilio, the system sends automated SMS messages to patients upon appointment confirmations.

Responsive Design:
Fully optimized for all devices—whether you’re on a desktop, tablet, or mobile phone.

Secure File Uploads:
Utilizes Appwrite Storage for secure uploads and file management.

Performance Tracking:
Integrated with Sentry to continuously monitor performance and quickly identify any issues.

Quick Start
Follow these steps to set up and run GoArogya locally on your machine.

Prerequisites
Before you start, ensure that the following tools are installed on your machine:

Git

Node.js

npm (Node Package Manager)

Cloning the Repository
Clone the repository to your local machine:
git clone https://github.com/teamgoarogya/goarogya.git
cd goarogya
Installation

Install all the project dependencies using npm:
npm install
Running the Application
After installation, start the development server:

bash
Copy
Edit
npm run dev
Now, open your browser and navigate to http://localhost:3000 to see your application in action.

