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
        } else {
            response = "I'm not sure how to answer that. Could you ask something else?";
        }

        setTimeout(function() {
            $('#chatBox').append('<p class="bot-response">' + response + '</p>');
            $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
        }, 500); // Delay response to simulate typing
    }
});
