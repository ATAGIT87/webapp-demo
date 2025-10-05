document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const responseElem = document.getElementById('response');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const responseElem = document.getElementById('response');

      try {
        const res = await fetch("https://backend-mn3f.onrender.com/api/auth/signup", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        
      if (res.ok) {
        responseElem.textContent = '✅ Signup successful!';
        localStorage.setItem('username', username);
        window.location.href = 'chat.html';
      } else {
        responseElem.textContent = `❌ Error ${res.status}: ${data.error || 'Signup failed'}`;
      }
    } catch (err) {
      responseElem.textContent = '⚠️ Network error: ' + err.message;
    }
  });
});