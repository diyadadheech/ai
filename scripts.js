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
  const nlpDoc = nlp(userMessage);
  const topics = nlpDoc.topics().out('array');  // Extract key topics
  const lowerMessage = userMessage.toLowerCase();
  
  let botResponse = "I'm sorry, I didn't understand that.";
  
  if (topics.includes('weather')) {
    botResponse = 'I can’t check the weather right now, but you can use a weather website.';
  } else if (topics.includes('time')) {
    botResponse = `The current time is ${new Date().toLocaleTimeString()}.`;
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    botResponse = 'Hello! How can I assist you today?';
  } else if (lowerMessage.includes('help')) {
    botResponse = 'Sure! Let me know what you need help with.';
  } else if (lowerMessage.includes('your name')) {
    botResponse = 'I am your AI chatbot!';
  } else if (lowerMessage.includes('bye')) {
    botResponse = 'Goodbye! Have a great day!';
  }

  setTimeout(() => addMessage(botResponse, 'bot'), 500);
}
s
