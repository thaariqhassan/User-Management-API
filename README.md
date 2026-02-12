User Management API

A RESTful User Management API built using Node.js and Express, focusing on correct HTTP semantics, clean API design, standardized error handling, and thorough request validation.

This project intentionally uses in-memory storage to emphasize API fundamentals over persistence.

Features

REST-compliant CRUD operations on users

Proper use of HTTP methods and status codes

Input validation and edge-case handling

Consistent, structured error responses

Duplicate resource conflict detection

Lightweight request testing via .rest files

Tech Stack

Runtime: Node.js

Framework: Express.js

API Style: REST

Testing: VS Code REST Client (.rest files)

API Endpoints
Users Resource
Method	Endpoint	Description
GET	/users	Fetch all users
GET	/users/:id	Fetch a user by ID
POST	/users	Create a new user
PATCH	/users/:id	Update an existing user
DELETE	/users/:id	Delete a user
Request & Response Behavior
Create User

POST /users

{
  "name": "Tom",
  "email": "tom@mail.com"
}

Success

Status: 201 Created

Failure cases

Missing fields → 400 Bad Request

Duplicate email → 409 Conflict

Error Response Format

All errors follow a consistent structure:

{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User does not exist"
  }
}

This ensures predictable error handling for API consumers.

Status Codes Used
Code	Scenario
200	Successful retrieval
201	Resource created
204	Resource deleted (no content)
400	Invalid request data
404	Resource not found
409	Resource conflict
500	Internal server error
Validation Rules

name and email are required fields

email must be unique

Invalid or malformed IDs return 400

Non-existent resources return 404

Running the Project
Prerequisites

Node.js (v18+ recommended)

Setup
npm install
Start the server
npm start

Server runs on:

http://localhost:3000
Testing the API

API requests can be tested using the provided .rest files:

/api/users.rest

These files include:

Happy path requests

Validation failures

Conflict scenarios

They are designed to be executed using the VS Code REST Client extension.

Project Scope & Intent

This project focuses on:

HTTP fundamentals

API correctness

Backend engineering discipline

It deliberately excludes:

Databases

Authentication

Authorization

Frontend/UI

What This Project Demonstrates:

Understanding of REST and HTTP semantics

Clean separation of concerns

Defensive backend programming

Production-style API behavior at a small scale
