$(document).ready(function() {
    $('#sendBtn').click(function() {
        var userInput = $('#userInput').val();
        if (userInput.trim() !== "") {
            $('#chatBox').append('<p class="user-message">' + userInput + '</p>');
            generateResponse(userInput);
            $('#userInput').val('');
        }
    });

    function generateResponse(input) {
        var response = "";

        // Simple predefined responses
        if (input.toLowerCase().includes("hello")) {
            response = "Hello! How can I assist you today?";
        } else if (input.toLowerCase().includes("how are you")) {
            response = "I'm just a bot, but I'm doing great! How about you?";
        } else if (input.toLowerCase().includes("what is your name")) {
            response = "I'm your friendly chatbot!";
        } else if (input.toLowerCase().includes("weather")) {
            response = "I can't check the weather right now, but you can use a weather app!";
        } else {
            response = "I'm not sure how to answer that. Could you ask something else?";
        }

        setTimeout(function() {
            $('#chatBox').append('<p class="bot-response">' + response + '</p>');
            $('#chatBox').scrollTop($('#chatBox')[0].scrollHeight);
        }, 500); // Delay response to simulate typing
    }
});
