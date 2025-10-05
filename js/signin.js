(() => {
  const form = document.getElementById('signinForm');
  const responseElem = document.getElementById('response');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const res = await fetch('https://backend-mn3f.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (res.ok) {
         responseElem.textContent = JSON.stringify(data, null, 2);
        localStorage.setItem('username', username);
        responseElem.textContent = 'Signin successful';
        window.location.href = 'chat.html';
      } else {
        responseElem.textContent = `Error ${res.status}: ${data.error || 'Signin failed'}`;
      }
    } catch (err) {
      responseElem.textContent = 'Network error: ' + err;
    }
  });
})();
