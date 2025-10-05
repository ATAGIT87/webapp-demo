(() => {
     document.getElementById('signupForm').addEventListener('submit', async function(e) {
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
        responseElem.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        responseElem.textContent = 'Error: ' + err;
      }
    });
})();