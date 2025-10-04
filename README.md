💬 Realtime Chat Frontend

A simple and elegant Realtime Chat frontend built with HTML, CSS, and Vanilla JavaScript, using Socket.IO for live communication with the backend.
User accounts are securely stored in AWS DynamoDB, managed by the backend API.

🚀 Features

✅ Fully responsive (works on desktop & mobile)
✅ User signup and signin connected to AWS DynamoDB
✅ Username stored locally using localStorage
✅ Public realtime chat powered by Socket.IO
✅ Logout support
✅ Modern gradient UI with smooth animations

🧩 Project Structure
frontend/
│
├── signin.html       → User Signin page
├── signup.html       → User Signup page
├── chat.html         → Realtime chat page
│
└── api/              → (Optional) Generated files from OpenAPI if Swagger is used
    ├── core/
    └── services/

⚙️ How to Run
1️⃣ Run Locally

Simply open signin.html in your browser,
or start a lightweight local server like http-server or VSCode Live Server:

npx http-server .


Then open:
👉 http://localhost:8080/signin.html

2️⃣ Backend Connection

This frontend connects to the backend hosted at:

https://backend-mn3f.onrender.com


All network operations (Signup, Signin, Chat messages) are sent to this backend,
which interacts with AWS DynamoDB to store and retrieve user data.

Example:

const socket = io("https://backend-mn3f.onrender.com");
fetch("https://backend-mn3f.onrender.com/api/auth/signin", { ... });


If the backend URL changes, simply update it inside your HTML files.

🧠 How It Works
📝 Signup (signup.html)

User enters a username and password.

A POST request is sent to /api/auth/signup.

The backend validates and stores the user in AWS DynamoDB.

🔑 Signin (signin.html)

User provides credentials.

The backend verifies them against DynamoDB.

If successful, the username is stored in localStorage, and the user is redirected to chat.html.

💬 Chat (chat.html)

The app connects to the backend using Socket.IO.

Messages are sent in realtime and broadcast to all connected clients.

User’s own messages are styled differently (right-aligned).

Clicking Logout clears localStorage and redirects back to the signin page.

📱 Mobile-Friendly Design

The layout is fully responsive using CSS Flexbox and viewport scaling.
Chat messages and buttons are touch-optimized for mobile users.

🧰 Technologies Used
Tool / Library	Purpose
Socket.IO	Realtime bidirectional chat
AWS DynamoDB	Secure user storage
Fetch API	REST API calls
LocalStorage	Session management
HTML/CSS (Vanilla)	Lightweight UI
http-server / Live Server	Local testing
🧹 Future Improvements

Private chat rooms

Online user presence tracking

Message persistence (save chat logs to DynamoDB)

Dark/light theme toggle

Chat timestamps and typing indicators

👨‍💻 Author

Developed by Ali Tabatabaei
Backend: https://backend-mn3f.onrender.com