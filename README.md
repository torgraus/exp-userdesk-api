# UserDesk API

**UserDesk API** is a **RESTful backend service** built with **Express.js** and **MongoDB** that provides **user authentication** and **profile management functionality**. It is designed as the **backend** for a **user profile application** and supports **versioned routing** for future scalability.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Auth Routes](#auth-routes)
  - [User Routes](#user-routes)
- [Code Quality Practices](#code-quality-practices)
- [Status](#status)
- [Author](#author)
- [License](#license)

---

## ✨ Features

- User Registration and Authentication (JWT-based)
- Protected Routes for Profile Access
- Update and Delete User Profile
- Environment-based Logging with Morgan
- Centralized Error Handling
- Modular and Scalable Project Structure
- Versioned API Routing
- CORS support for frontend interaction

---

## 🛠️ Tech Stack

| Category       | Tools/Packages                      |
| -------------- | ----------------------------------- |
| Backend        | Node.js, Express.js                 |
| Database       | MongoDB, Mongoose                   |
| Authentication | JSON Web Token (JWT), bcryptjs      |
| Utilities      | express-async-handler, morgan, cors |
| Styling Logs   | colors                              |
| Env Handling   | Node.js                             |

---

## 🧾 Project Structure

```
exp-userdesk-api/
├── .env                 # Environment variables (not committed)
├── .gitignore           # Git ignored files
├── LICENSE              # Project license (MIT)
├── README.md            # Project documentation
├── docs/                # API documentation or references
├── package.json         # Project metadata and scripts
├── package-lock.json    # Dependency lockfile
├── server.js            # Entry point - starts the server
├── src/                 # Main application source
│   ├── app.js           # Express app setup
│   ├── config/          # Database connection and configuration
│   ├── controllers/     # Controller logic
│   │   └── v1/          # Versioned controllers (e.g., user.controller.js)
│   ├── middlewares/     # Custom middleware (auth, error handling)
│   ├── models/          # Mongoose schemas (e.g., User model)
│   ├── routes/          # Route definitions
│   │   └── v1/          # Versioned routes (e.g., user.route.js, auth.route.js)
│   └── utils/           # Utility functions (e.g., hashPassword, generateToken)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/torgraus/exp-userdesk-api.git
cd exp-userdesk-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` in the root

```env
PORT=your_port_number
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Run the server

For development (with file watching)

```bash
npm run dev
```

For production

```bash
npm start
```

---

## 📮 API Endpoints

> All routes are prefixed with `api/v1`

### 🔐 Auth Routes

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | `/auth/users/register` | Register a new user |
| POST   | `/auth/users/login`    | Log in a user       |

---

### 👤 User Routes

| Method | Endpoint     | Description              | Access  |
| ------ | ------------ | ------------------------ | ------- |
| GET    | `/users/me`  | Get current user profile | Private |
| PATCH  | `/users/:id` | Update user profile      | Private |
| DELETE | `/users/:id` | Delete user profile      | Private |

## 🧼 Code Quality Practices

- ✅ API versioning
- ✅ RESTful conventions
- ✅ Clean controller-service separation
- ✅ Centralized error handling
- ✅ Secure password storage
- ✅ Environment-specific logging

---

## 📌 Status

This is a **work-in-progress project**, built incrementally with **Express.js** and other **Node.js** libraries.

### ✅ Completed

- Authentication system
- User profile CRUD
- Protected routes and token handling

### 🔜 Coming Next

- Input validation (e.g., `express-validator`)
- Rate limiting and security headers (`helmet`)
- Swagger/OpenAPI docs
- Unit/integration tests

---

## 👨‍💻 Author

**Henry Amponsah**  
Computer Science Student | Backend & ML Enthusiast  
GitHub: [@torgraus](https://github.com/torgraus)

---

## 📄 License

This project is licensed under the **[MIT License](./LICENSE)**.
