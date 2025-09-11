# Faculty App Backend API

This is the backend API for **Faculty App**, an app that keeps the record of faculty members of educational institute. Built with **Node.js**, **Express**, and **MongoDB**, it powers user authentication, research project management, publications, books, patents, distinctions, employment records, workshops, trainings, personal details and more for Faculty App frontend.
 
---

## 🚀 Key Features

- 🔐 **User Authentication**: Secure registration, login, password change, and JWT-based session management.
- 🛡️ **Role-Based Authorization**: Admin and user roles with protected endpoints.
- 📚 **Faculty App Management**: APIs for projects, publications, books, patents, distinctions, employment records, workshops, trainings, and personal details.
- 🗂️ **Modular Structure**: Organized routes, controllers, and models for scalability and maintainability.
- 🛡️ **Middleware**: Rate limiting, object ID validation, and authentication middleware for robust security.
- 🌱 **Database Seeding**: Seeder scripts to populate initial data for users and projects.

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **dotenv** for environment variables
- **cors** for cross-origin requests
- **morgan** for logging
- **jsonwebtoken** for JWT authentication

---

## 🗃️ MongoDB Database: `faculty_app`

Backend uses a MongoDB database with the following collections:

| Collection         | Purpose                                               |
| ------------------ | ---------------------------------------------------- |
| `users`            | User credentials, profile, and role management       |
| `projects`         | Research project details and funding info            |
| `publications`     | Academic publication records                         |
| `books`            | Book and chapter records                             |
| `patents`          | Patent records                                       |
| `distinctions`     | Awards and distinctions                              |
| `employmentRecords`| Employment history                                   |
| `workshops`        | Workshop participation and certificates              |
| `trainings`        | Training records                                     |
| `educations`       | Educational qualifications                           |
| `personalDetails`  | Personal and academic profile details                |

---

## 📁 Project Structure

```
📦 e_com-backend-api
├── config/                # Configuration files
│   └── database.js        # MongoDB connection setup
├── controllers/           # Business logic for each entity
│   ├── books.js
│   ├── distinctions.js
│   ├── educations.js
│   ├── employmentRecords.js
│   ├── patents.js
│   ├── personalDetails.js
│   ├── projects.js
│   ├── publications.js
│   ├── trainings.js
│   ├── users.js
│   └── workshops.js
├── models/                # Mongoose schemas
│   ├── books.js
│   ├── distinctions.js
│   ├── educations.js
│   ├── employmentRecords.js
│   ├── patents.js
│   ├── personalDetails.js
│   ├── projects.js
│   ├── publications.js
│   ├── trainings.js
│   ├── users.js
│   └── workshops.js
├── middleware/            # Custom middlewares
│   ├── api-limit.js
│   ├── auth.js
│   └── validateObjectId.js
├── routes/                # API routes
│   ├── books.js
│   ├── distinctions.js
│   ├── educations.js
│   ├── employmentRecords.js
│   ├── patents.js
│   ├── personalDetails.js
│   ├── projects.js
│   ├── publications.js
│   ├── trainings.js
│   ├── users.js
│   └── workshops.js
├── seeders/                # API routes
│   ├── seedBooks.js
│   ├── seedDistinctions.js
│   ├── seedEducations.js
│   ├── seedEmploymentRecords.js
│   ├── seedPatents.js
│   ├── seedPersonalDetails.js
│   ├── seedProjects.js
│   ├── seedPublications.js
│   ├── seedTrainings.js
│   ├── seedUsers.js
│   └── seedWorkshops.js
├── utils/
│   └── send-mail.js
├── views/
│   └── email.handlebars
├── .env.example           # Example environment variables
├── index.js               # Server entry point
├── package.json           # Project metadata and scripts
└── Readme.md              # Project documentation
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ayeshanoor148/faculty_backend_api.git
cd faculty_app-backend-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file using `.env.example` as a template:

```env
PORT=5000
HOST=localhost
MONGODB_URI="mongodb://localhost:27017/faculty_new"
WEBAPP_URL="http://localhost:8081"
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
```

### 4. Start the Development Server

```bash
npm run dev
```

Server runs at: [http://localhost:5000](http://localhost:5000)

For production:

```bash
npm start
```

### 🌱 Seed Initial Data

Populate the database with sample data:

```bash
node run-seeder.js
```

Make sure MongoDB is running locally before executing the seeder.

---

## 📬 API Endpoints Overview

| Entity            | Endpoint                 |
| ----------------- | ------------------------ |
| Users             | `/api/auth`              |
| Projects          | `/api/projects`          |
| Publications      | `/api/publications`      |
| Books             | `/api/books`             |
| Patents           | `/api/patents`           |
| Distinctions      | `/api/distinctions`      |
| EmploymentRecords | `/api/employmentRecords` |
| Workshops         | `/api/workshops`         |
| Trainings         | `/api/trainings`         |
| Educations        | `/api/educations`        |
| PersonalDetails   | `/api/personalDetails`   |

All routes support standard CRUD operations (**GET**, **POST**, **PUT**, **DELETE**) with JWT-based protection for sensitive actions.

---

## 🔗 API Testing

Use Postman or similar tools to test endpoints.

📂 **Faculty App Postman Collection**: [View on Postman](https://code-wariors.postman.co/workspace/My-Workspace~28b150c7-2164-4fb6-8f32-cadc2037b7cb/collection/42689136-f44d350a-17d9-4f39-ae94-d1ac5e67b6af?action=share&creator=42689136&active-environment=42689136-58b7ec35-3672-40cf-8317-6ee44e8c4195)

---

##  License

This project is licensed under the **ISC License**.

---

## 👤 Authors & Mentors

| Role         | Name                                                                 |
| ------------ | -------------------------------------------------------------------- |
| 🧑‍💻 Author   | [Ayesha Noor](https://github.com/ayeshanoor148) – Developer of HostelValy Backend API |
| 🎓 Mentor    | [Sir Allah Rakha](https://github.com/sudo-allahrakha) – Project Supervisor |