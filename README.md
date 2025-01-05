# Lead_Management_System
 A Lead Management System built using the MERN stack.

 # Lead Management System

## Project Overview

The **Lead Management System** is a full-stack application built with the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It serves as a platform for Key Account Managers (KAMs) to manage their leads, points of contact (POCs), interactions, and call planning. The application allows KAMs to track and manage leads efficiently while ensuring easy access to relevant data via an intuitive user interface.

### Features:
- **User Authentication**: KAMs can register, log in, and securely access their data.
- **Lead Management**: Add, update, and view leads with their respective statuses.
- **POC Management**: Manage Points of Contact (POCs) for each lead.
- **Interaction Management**: Record and track interactions with leads.
- **Call Planning**: Track leads that need follow-up calls today.

---

## System Requirements

### Backend
- **Node.js** (v14 or higher)
- **MongoDB** (Local or MongoDB Atlas)
- **npm** (v6 or higher)

### Frontend
- **React.js** (v18 or higher)
- **Tailwind CSS** (for styling)

---

## Installation Instructions

### Backend Setup:
1. **Clone the repository**:
   ```bash
   git clone <repo_url>
   cd lead-management-system/backend
   
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the backend folder with the following content:
makefile
Copy code
JWT_SECRET=<your_jwt_secret>
MONGO_URI=<your_mongo_connection_string>
Start the backend server:

bash
Copy code
npm run dev
The backend will now be running on http://localhost:5000.

Frontend Setup:
Navigate to the frontend directory:

bash
Copy code
cd lead-management-system/frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
The frontend will now be running on http://localhost:3000.

Running Instructions
Start the backend server by running the command:

bash
Copy code
npm run dev
from the backend directory.

Start the frontend server by running the command:

bash
Copy code
npm start
from the frontend directory.

Once both servers are running, open your browser and navigate to http://localhost:3000 to access the Lead Management System.

Test Execution Guide
Backend Tests:
Make sure the backend server is running.
Use a test framework like Mocha or Jest to write unit tests for the backend.
Run the tests:
bash
Copy code
npm test
Frontend Tests:
Ensure the frontend dependencies are installed.
Use Jest and React Testing Library for testing React components.
Run the tests:
bash
Copy code
npm test
API Documentation
Authentication
POST /api/auth/register

Registers a new KAM user.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "message": "User Registered Successfully"
}
POST /api/auth/login

Logs in an existing KAM user and returns a JWT token.
Request Body:
json
Copy code
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "<JWT_TOKEN>"
}
Lead Management
POST /api/leads

Adds a new lead.
Request Body:
json
Copy code
{
  "name": "Lead Name",
  "contactDetails": "1234567890",
  "status": "New"
}
Response:
json
Copy code
{
  "message": "Lead Added Successfully"
}
GET /api/leads

Fetches leads for the logged-in user.
Response:
json
Copy code
[
  {
    "name": "Lead Name",
    "contactDetails": "1234567890",
    "status": "New"
  },
  {
    "name": "Another Lead",
    "contactDetails": "9876543210",
    "status": "In Progress"
  }
]
POC Management
POST /api/pocs

Adds a new POC to a lead.
Request Body:
json
Copy code
{
  "leadId": "lead_id",
  "name": "John POC",
  "role": "Manager",
  "contactDetails": "9876543210"
}
GET /api/pocs/:leadId

Fetches all POCs for a given lead.
Response:
json
Copy code
[
  {
    "name": "John POC",
    "role": "Manager",
    "contactDetails": "9876543210"
  }
]
Interaction Management
POST /api/interactions

Records an interaction for a lead.
Request Body:
json
Copy code
{
  "leadId": "lead_id",
  "date": "2025-01-05",
  "interactionType": "Call",
  "notes": "Discussed lead status"
}
GET /api/interactions/:leadId

Fetches all interactions for a given lead.
Response:
json
Copy code
[
  {
    "date": "2025-01-05",
    "interactionType": "Call",
    "notes": "Discussed lead status"
  }
]
Call Planning
GET /api/calls/today
Fetches leads requiring calls today.
Response:
json
Copy code
[
  {
    "leadId": "lead_id",
    "name": "Lead Name",
    "contactDetails": "1234567890",
    "status": "In Progress"
  }
]
Sample Usage Examples
Register a User
POST /api/auth/register
Request:
json
Copy code
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "password": "password456"
}
Response:
json
Copy code
{
  "message": "User Registered Successfully"
}
Login a User
POST /api/auth/login
Request:
json
Copy code
{
  "email": "janedoe@example.com",
  "password": "password456"
}
Response:
json
Copy code
{
  "token": "JWT_TOKEN"
}
Add a Lead
POST /api/leads
Request:
json
Copy code
{
  "name": "New Lead",
  "contactDetails": "1234567890",
  "status": "New"
}
Response:
json
Copy code
{
  "message": "Lead Added Successfully"
}
Conclusion
The Lead Management System is designed to streamline the workflow for KAMs by providing them with an easy-to-use platform for managing leads, POCs, interactions, and call planning. This application is built using the latest web technologies and is fully integrated with backend APIs. You can modify, extend, or enhance the system as per your business requirements.

vbnet
Copy code

This is a comprehensive `README.md` file that should serve your project well. It includes the necessary installation, usage, and API documentation, making it easy for anyone to get started with and understand your Lead Management System.
