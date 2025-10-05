document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");

  if (!username) {
    alert("Please sign in first!");
    window.location.href = "signin.html";
    return;
  }

  // server connection
  const socket = io("https://backend-mn3f.onrender.com");

  const chatBox = document.getElementById("chat-box");
  const msgInput = document.getElementById("msg");
  const sendBtn = document.getElementById("sendBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userList = document.getElementById("userList");

  // server notify user joined
  socket.emit("userJoined", username);

  // send chat message
  sendBtn.addEventListener("click", () => {
    const msg = msgInput.value.trim();
    if (msg) {
      socket.emit("chatMessage", { username, text: msg });
      msgInput.value = "";
    }
  });

  //receive chat message
  socket.on("chatMessage", (msgObj) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.classList.add(msgObj.username === username ? "own" : "other");
    msgDiv.innerHTML = `<strong>${msgObj.username}:</strong> ${msgObj.text}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  // show system messages
  socket.on("systemMessage", (text) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "system");
    msgDiv.innerHTML = `<em>${text}</em>`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  // update online users list
  socket.on("onlineUsers", (users) => {
    userList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user === username ? `${user} (You)` : user;
      userList.appendChild(li);
    });
  });

  // exit chat
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username");
    socket.disconnect();
    window.location.href = "signin.html";
  });
});
