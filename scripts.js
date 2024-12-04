document.getElementById('user-input').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});

function handleUserInput() {
  const inputField = document.getElementById('user-input');
  const userMessage = inputField.value.trim();
  
  if (userMessage) {
    addMessage(userMessage, 'user');
    generateResponse(userMessage);
    inputField.value = '';
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  document.getElementById('messages').appendChild(messageDiv);
  document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight;
}

function generateResponse(userMessage) {
  let botResponse = '';
  
  // Simple keyword matching logic
  if (userMessage.toLowerCase().includes('hello')) {
    botResponse = 'Hi there! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    botResponse = 'Sure! What do you need help with?';
  } else {
    botResponse = "I'm not sure how to respond to that.";
  }
  
  setTimeout(() => addMessage(botResponse, 'bot'), 500);
}
