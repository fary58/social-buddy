# Social Media App (MERN Stack) 📱

A full-stack social media platform built with MongoDB, Express, React, and Node.js where users can share posts, photos, and videos while interacting with others.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features ✨
- 📸 Upload photos and videos with captions
- ❤️ Like/unlike posts
- 💬 Comment on posts
- 👥 Follow/unfollow other users
- 📂 User profiles with posts and follower stats
- 🔄 Real-time updates with React hooks

## Tech Stack 🛠️
**Frontend:**
- React.js with Hooks (useState, useEffect, useRef)
- React Router for navigation

**Backend:**
- Node.js & Express.js
- Multer for file uploads

**Database:**
- MongoDB Atlas (Cloud)
- Mongoose ODM

## Installation ⚙️

### 1. Clone the repository
```bash
git clone https://github.com/fary58/social-buddy.git
cd social-buddy
2. Set up backend
bash
cd backend
npm install
Create a .env file with:

env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8080
Start server:

bash
npm start
3. Set up frontend
bash
cd ../frontend
npm install
Start React app:

bash
npm start
App will run on http://localhost:3000

Project Structure 📂
social-buddy/
├── backend/
│   ├── controllers/       # Logic for routes
│   ├── models/            # Mongoose models
│   ├── routes/            # API endpoints
│   ├── middleware/        # Auth middleware
│   ├── uploads/           # Uploaded media
│   └── server.js          # Server entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # Auth context
│   │   ├── pages/         # Main views
│   │   ├── utils/         # Helpers & API config
│   │   └── App.js         # Main component
│   └── package.json
│
└── README.md
API Endpoints 🌐
Endpoint	Method	Description
/api/auth/register	POST	Register new user
/api/auth/login	POST	User login
/api/posts	POST	Create new post
/api/posts/:id/like	PATCH	Like/unlike post
/api/users/:id/follow	PATCH	Follow/unfollow user
/api/posts/:id/comments	POST	Add comment
Key Components 🧩
Frontend:

AuthContext.js - Manages user authentication state

Post.js - Handles post display and interactions

UploadModal.js - File upload component using useRef

ProfilePage.js - User profile with stats

Backend:

userModel.js - Mongoose schema for users

javascript
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  avatar: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
Environment Variables 🔧
Backend .env requirements:

MONGO_URI: MongoDB Atlas connection string

JWT_SECRET: Secret for JSON Web Tokens

PORT: Server port (default: 5000)

License 📜
MIT © Farrukh Ahmad

