# 💬 Realtime Chat Frontend

A clean and elegant **Realtime Chat Frontend** built with **HTML**, **CSS**, and **Vanilla JavaScript**, using **Socket.IO** for live communication with the backend.

User accounts are securely stored in **AWS DynamoDB**, managed by the backend API.

---

## 🚀 Features

✅ Fully responsive (desktop & mobile friendly)  
✅ User signup & signin connected to AWS DynamoDB  
✅ Username stored locally using `localStorage`  
✅ Public realtime chat powered by **Socket.IO**  
✅ Logout functionality  
✅ Modern gradient UI with smooth animations  

---

## 🧩 Project Structure

frontend/
│
├── signin.html → User Signin page
├── signup.html → User Signup page
├── chat.html → Realtime Chat page
│
├── css/ → Centralized styles for all pages
│ ├── signin.css
│ ├── signup.css
│ └── chat.css
│
└── js/ → Page-specific scripts
├── signin.js
├── signup.js
└── chat.js


> Optionally, if you use Swagger/OpenAPI, generated files can live under `api/core/` and `api/services/`.

---

## ⚙️ How to Run

### 1️⃣ Run Locally

You can simply open `signin.html` in your browser,  
or start a lightweight local server such as [http-server](https://www.npmjs.com/package/http-server) or VSCode Live Server:

```bash
npx http-server .


Then open:
👉 http://localhost:8080/signin.html

2️⃣ Backend Connection

This frontend connects to the backend hosted at:

🔗 https://backend-mn3f.onrender.com

All network operations (Signup, Signin, Chat messages) are sent to this backend,
which interacts with AWS DynamoDB to store and retrieve user data.

Example:

const socket = io("https://backend-mn3f.onrender.com");
fetch("https://backend-mn3f.onrender.com/api/auth/signin", { ... });


If the backend URL changes, simply update the BACKEND_BASE variable in your JS files.

🧠 How It Works
📝 Signup (signup.html)

User enters a username & password.

A POST request is sent to /api/auth/signup.

The backend validates and stores the user in AWS DynamoDB.

🔑 Signin (signin.html)

User provides credentials.

The backend verifies them against DynamoDB.

On success, username is saved in localStorage and user is redirected to chat.html.

💬 Chat (chat.html)

The client connects to the backend via Socket.IO.

Messages are broadcast in realtime to all connected users.

The user's own messages are styled differently (right-aligned).

Clicking Logout clears localStorage and redirects back to the signin page.

📱 Mobile-Friendly Design

Fully responsive layout using Flexbox and viewport units

Touch-optimized buttons and inputs

Automatically scales for small screens

🧰 Technologies Used
Tool / Library	Purpose
Socket.IO	Realtime bidirectional chat
AWS DynamoDB	Secure user storage
Fetch API	REST API calls
LocalStorage	Session management
HTML / CSS (Vanilla)	Lightweight UI
http-server / Live Server	Local testing
🧹 Future Improvements

✨ Private chat rooms
✨ Online user presence tracking
✨ Message persistence (save chat logs to DynamoDB)
✨ Dark / light theme toggle
✨ Chat timestamps & typing indicators

👨‍💻 Author

Developed by Ali Tabatabaei
🖥️ Backend: https://backend-mn3f.onrender.com
