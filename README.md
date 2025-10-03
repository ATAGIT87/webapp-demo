# webapp-demo
“A simple signup demo web app with HTML frontend and Node.js backend.”
# Frontend – Signup & Signin Demo

## Overview
This is the **frontend part** of the project.  
It provides simple HTML forms (`signup.html` and `signin.html`) that allow users to interact with the backend API (Express + DynamoDB).

---

## Files
- `signup.html` → User registration page (with a link to Signin).
- `signin.html` → User login page (with a link to Signup).

---

## How It Works
- The forms use JavaScript `fetch` API to send HTTP requests to the backend:
  - `POST /auth/signup` → Register a new user.
  - `POST /auth/signin` → Login with existing credentials.
- Backend URL (update if needed):

https://backend-xxxx.onrender.com/auth
---

## Deployment
- This frontend can be hosted on:
- GitHub Pages
- Netlify
- Render (Static Site)

Make sure the backend API URL is updated in the JavaScript `fetch()` calls.

---
