📚 Student Management System
📌 Project Overview

The Student Management System is a full-stack web application developed using Node.js, Express, MongoDB, and EJS.
It allows users to perform CRUD (Create, Read, Update, Delete) operations on student records.

This project demonstrates backend development, database integration, MVC architecture, and server-side rendering using EJS.

🚀 Features

Add new students

View all students

Update student details

Delete student records

Unique roll number validation

Error handling for duplicate entries

Pagination & sorting (API level)

Server-side rendering using EJS

Bootstrap-based responsive UI

🛠️ Technologies Used

Node.js

Express.js

MongoDB

Mongoose

EJS

Bootstrap

dotenv

cors

nodemon

📂 Project Structure
student-app/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── student.controller.js
│
├── models/
│   └── student.model.js
│
├── routes/
│   ├── student.routes.js
│   └── student.view.routes.js
│
├── views/
│   └── students/
│       ├── index.ejs
│       └── edit.ejs
│
├── .env
├── index.js
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repo-link>
cd student-app
2️⃣ Install Dependencies
pnpm install
3️⃣ Configure Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/studentDB

Or for local MongoDB:

MONGO_URI=mongodb://127.0.0.1:27017/studentDB
4️⃣ Run the Application
pnpm dev

Server will start at:

http://localhost:3000
🌐 Application Routes
🔹 View Routes (UI)
Method	Route	Description
GET	/view/students	Display all students
POST	/view/students	Add new student
GET	/view/students/edit/:id	Edit student page
POST	/view/students/update/:id	Update student
GET	/view/students/delete/:id	Delete student
🔹 API Routes (JSON)
Method	Endpoint	Description
GET	/students	Get all students
POST	/students	Create student
GET	/students/:id	Get student by ID
PUT	/students/:id	Update student
DELETE	/students/:id	Delete student
🗄️ Database Schema
Student Schema
Field	Type	Validation
name	String	Required, Trimmed, 2–50 characters
roll	Number	Required, Unique, Positive Integer
createdAt	Date	Auto-generated
updatedAt	Date	Auto-generated
❗ Error Handling

Duplicate roll numbers are prevented using a unique index.

MongoDB error code 11000 is handled and displayed in UI.

Invalid ID errors are handled properly.

Database connection errors are managed gracefully.

🧠 Concepts Used

MVC Architecture

RESTful API Design

Environment Variables

MongoDB Atlas / Local MongoDB

Server-side Rendering (EJS)

Middleware Usage

Error Handling

Data Validation

🎯 Learning Outcomes

Learned how to connect Node.js with MongoDB using Mongoose.

Implemented CRUD operations.

Handled duplicate key errors.

Built dynamic UI using EJS.

Understood routing and middleware in Express.

Worked with environment configuration.
