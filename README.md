# Quiz App

A full-stack Quiz Application where users can take quizzes and view their scores. The app is built using React.js for the frontend and Node.js with Express for the backend. MongoDB is used for storing quiz data.

## Features
- Users can attempt various quizzes.
- Quizzes contain multiple-choice questions.
- After submission, users can view their score based on correct answers.
- Backend APIs provide quiz data and handle quiz submissions.

## Live Demo
- **Frontend**: [Quiz App Frontend](https://quiz-app-eosin-mu.vercel.app/)
- **Backend**: [Quiz App Backend](https://quiz-app-sfo4.onrender.com)

## Tech Stack
- **Frontend**: React.js, React Router, React Toastify, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

## Installation and Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB database

### Backend Setup
1. Clone the repository:
   ```bash
  
2. Navigate to the server folder:
   ```bash
   cd Quiz-App/backend
3. Install backend dependencies:
   ```bash
   npm install
4. Set up environment variables:
- Create a .env file in the server folder and add the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
5. Start the backend server:
   ```bash
   npm start

### Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd Quiz-App/frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the frontend server:
   ```bash
   npm run dev
