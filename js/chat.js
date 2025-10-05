document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');

  if (!username) {
    alert('Please sign in first!');
    window.location.href = 'signin.html';
    return;
  }

  const socket = io('https://backend-mn3f.onrender.com');
  const chatBox = document.getElementById('chat-box');
  const msgInput = document.getElementById('msg');
  const sendBtn = document.getElementById('sendBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  // Send message
  sendBtn.addEventListener('click', () => {
    const msg = msgInput.value.trim();
    if (msg) {
      socket.emit('chatMessage', { username, text: msg });
      msgInput.value = '';
    }
  });

  // Receive message
  socket.on('chatMessage', (msgObj) => {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(msgObj.username === username ? 'own' : 'other');
    msgDiv.innerHTML = `<strong>${msgObj.username}:</strong> ${msgObj.text}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'signin.html';
  });
});
