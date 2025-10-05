document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signinForm");
  const responseElem = document.getElementById("response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      responseElem.textContent = "⚠️ Please enter both username and password.";
      return;
    }

    try {
      const res = await fetch("https://backend-mn3f.onrender.com/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        responseElem.textContent = "✅ Signin successful! Redirecting...";
        responseElem.style.color = "green";

        // delete old username if any
        localStorage.removeItem("username");
        // save new username
        localStorage.setItem("username", username);

        // add slight delay before redirect
        setTimeout(() => {
          window.location.href = "chat.html";
        }, 1000);
      } else {
        responseElem.textContent = `❌ ${data.error || "Signin failed"}`;
        responseElem.style.color = "red";
      }
    } catch (err) {
      responseElem.textContent = "⚠️ Network error: " + err.message;
      responseElem.style.color = "orange";
    }
  });
});
