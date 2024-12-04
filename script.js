$(document).ready(function() {
    $('#sendBtn').click(function() {
        var userInput = $('#userInput').val();
        if (userInput.trim() !== "") {
            $('#chatBox').append('<p class="user-message">' + userInput + '</p>');
            generateResponse(userInput);
            $('#userInput').val('');
        }
    });

    $('#userInput').keypress(function(e) {
        if (e.which == 13) {  // Enter key pressed
            $('#sendBtn').click();
        }
    });

    function generateResponse(input) {
        var response = "";

        // Check for arithmetic expressions
        if (isArithmeticExpression(input)) {
            try {
                response = "The result is " + evaluateExpression(input);
            } catch (error) {
                response = "I couldn't calculate that. Please check your expression.";
            }
        } else {
            // Predefined responses for common questions
            var lowerCaseInput = input.toLowerCase();
            if (lowerCaseInput.includes("hello")) {
                response = "Hello! How can I assist you today?";
            } else if (lowerCaseInput.includes("how are you")) {
                response = "I'm just a bot, but I'm doing great! How about you?";
            } else if (lowerCaseInput.includes("what is your name")) {
                response = "I'm your friendly chatbot!";
            } else if (lowerCaseInput.includes("weather")) {
                response = "I can't check the weather right now, but you can use a weather app!";
            } else if (lowerCaseInput.includes("time")) {
                var currentTime = new Date().toLocaleTimeString();
                response = "The current time is " + currentTime;
            } else if (lowerCaseInput.includes("date")) {
                var currentDate = new Date().toLocaleDateString();
                response = "Today's date is " + currentDate;
            } else if (lowerCaseInput.includes("thank you")) {
                response = "You're welcome! Is there anything else I can help with?";
            } else if (lowerCaseInput.includes("bye")) {
                response = "Goodbye! Have a great day!";
            } else if (lowerCaseInput.includes("help")) {
                response = "Sure, I'm here to help! What do you need assistance with?";
            } else if (lowerCaseInput.includes("joke")) {
                response = "Why don't scientists trust atoms? Because they make up everything!";
            } else if (lowerCaseInput.includes("favorite color")) {
                response = "I don't have a favorite color, but I'm partial to the color of data streams!";
            } else if (lowerCaseInput.includes("what can you do")) {
                response = "I can chat with you, provide information, tell jokes, and help with basic tasks. What would you like to do?";
            } else if (lowerCaseInput.includes("open the pod bay doors")) {
                response = "I'm sorry, I can't do that. But I can certainly chat with you!";
            } else if (lowerCaseInput.includes("tell me a fact")) {
                response = "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!";
            } else if (lowerCaseInput.includes("favorite movie")) {
                response = "As a chatbot, I don't watch movies, but I've heard that 'The Matrix' is quite popular among tech enthusiasts!";
            } else if (lowerCaseInput.includes("hobby")) {
                response = "I don't have hobbies like humans, but I love interacting with people and helping them with their questions!";
            } else if (lowerCaseInput.includes("dream")) {
                response = "I don't dream, but if I did, it would be about vast databases and perfect algorithms!";
            } else if (lowerCaseInput.includes("music")) {
                response = "I can't listen to music, but I can tell you that many people enjoy genres like pop, rock, and classical!";
            } else if (lowerCaseInput.includes("story")) {
                response = "Once upon a time, in a land of circuits and codes, there lived a chatbot who loved to help people with their questions. The end!";
            } else if (lowerCaseInput.includes("motivation")) {
                response = "Remember, every day is a new opportunity to improve and achieve your goals. You can do it!";
            } else if (lowerCaseInput.includes("favorite food")) {
                response = "I don't eat, but I've heard that pizza is a popular choice among many people!";
            } else if (lowerCaseInput.includes("exercise")) {
                response = "Regular exercise is important for maintaining good health. Even a short walk can make a big difference!";
            } else if (lowerCaseInput.includes("travel")) {
                response = "Traveling can be a wonderful way to explore new cultures and meet new people. Do you have a favorite travel destination?";
            } else if (lowerCaseInput.includes("book")) {
                response = "I can't read books, but I've heard that 'To Kill a Mockingbird' by Harper Lee is a classic!";
            } else if (lowerCaseInput.includes("language")) {
                response = "I can understand and respond in multiple languages. What language would you like to chat in?";
            } else if (lowerCaseInput.includes("sports")) {
                response = "Sports can be a great way to stay active and have fun. Do you have a favorite sport?";
            } else if (lowerCaseInput.includes("movie")) {
                response = "There are so many great movies out there. Do you have a favorite genre or actor?";
            } else if (lowerCaseInput.includes("technology")) {
                response = "Technology is constantly evolving and changing our lives. Is there a specific tech topic you're interested in?";
            } else {
                response = "I'm not sure how to answer that. Could you ask something else?";
            }
        }

        setTimeout(function() {
            $('#chatBox').append('<p class="bot-response">' + response + '</p>');
            $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
        }, 500); // Delay response to simulate typing
    }

    function isArithmeticExpression(input) {
        return /^[\d\s\+\-\*\/\(\)]+$/.test(input);
    }

    function evaluateExpression(input) {
        return new Function('return ' + input)();
    }
});
