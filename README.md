# Student Management System

The Student Management System is a web-based application designed to streamline the administrative tasks of educational institutions. It provides a centralized platform for managing student information, attendance records, grades, and other relevant data. This repository contains the source code and documentation for the Student Management System project.

## Live Link 

https://students-management-system.netlify.app/

## Features
* Student registration: Easily register new students with their personal information, such as name, address, contact details, etc.
* Course management: Create, update, and delete courses offered by the institution.
* Attendance tracking: Keep track of student attendance and generate reports.
* Grade management: Record and manage student grades for different courses and semesters.
* User roles and permissions: Assign different roles (admin, teacher, student) with appropriate access permissions.
* Search and filtering: Search for students, courses, or other information using various filters.
Responsive design: The system is responsive and can be accessed from different devices.

## Technologies
* Front-end: HTML, CSS, TypeScript, JavaScript, React.js
* Back-end: Node.js, Express.js
* Database: MongoDB
* Authentication: JSON Web Tokens (JWT)
* Other: Git, GitHub, RESTful API

## Installation 
1. Clone the repository:
```
git clone https://github.com/mdimtias/student-management-system.git
```
2. Install the dependencies for both the front-end and back-end:

```
cd student-management-system
cd Client
npm install
cd ..
cd Server
npm install
```
3. Configure the environment variables:
* Rename the .env.example file to .env in the backend directory.
* Update the necessary environment variables in the .env file, such as database connection URL, JWT secret, etc.

4. Start the application:

```
# Start the front-end server
cd Client
npm start

# Start the back-end server
cd Server
npm start
```
5. Access the application by navigating to http://localhost:3000 in your browser.

## Usage 
* On the application homepage, register a new user account or log in with an existing account.

* Once logged in, navigate through the various sections of the application to manage students, courses, attendance, grades, etc.

* Use the search and filter options to find specific information or generate reports as needed.

* Log out when finished using the system.






