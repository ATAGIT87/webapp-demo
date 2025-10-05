

(() => {
  const username = localStorage.getItem('username');
  if (!username) {
    alert('Please sign in first!');
    window.location.href = 'signin.html';
    return;
  }

  
  const socket = io("https://backend-mn3f.onrender.com");

  const chatBox = document.getElementById('chat-box');
  const msgInput = document.getElementById('msg');
  const sendBtn = document.getElementById('sendBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  sendBtn.addEventListener('click', () => {
    const msg = msgInput.value.trim();
    if (!msg) return;
    socket.emit('chatMessage', { username, text: msg });
    msgInput.value = '';
  });


  socket.on('chatMessage', (msgObj) => {
    const div = document.createElement('div');
    div.className = 'message ' + (msgObj.username === username ? 'own' : 'other');
    div.innerHTML = `<strong>${msgObj.username}:</strong> ${msgObj.text}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'signin.html';
  });
})();
