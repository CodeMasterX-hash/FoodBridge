FoodBridge

FoodBridge is a web platform for facilitating food donations. Donors can submit food details (type, quantity, address), and organizations or individuals in need can view the donations. Built using MERN stack (MongoDB, Express, React, Node.js).

Features:

Submit food donation details

View all donations

Simple, user-friendly interface

Technologies: React.js, Axios, Node.js, Express, MongoDB, CORS

Setup:
Backend:

cd backend
npm install
node server.js


Runs on: http://localhost:5000

Frontend:

cd frontend
npm install
npm start


Runs on: http://localhost:3000

API Endpoints:

POST /donate: Submit donation

{
  "name": "Kishore",
  "phone": "9876543210",
  "foodType": "Rice",
  "quantity": "5 Plates",
  "address": "Chennai"
}


Response: {"message":"Food donation submitted!"}

GET /donations: View all donations

Contributing: Fork → Branch → Commit → Push → Pull Request
