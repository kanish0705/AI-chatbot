document.getElementById('chatbot-button').addEventListener('click', () => {
    document.getElementById('chatbot-container').style.display = 'block';
});

document.getElementById('close-chatbot').addEventListener('click', () => {
    document.getElementById('chatbot-container').style.display = 'none';
});

document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    let chatMessages = document.getElementById('chat-messages');

    // Display user message
    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    chatMessages.appendChild(userMessage);

    document.getElementById('user-input').value = "";

    // Simulate bot response
    setTimeout(() => {
        let botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');

        if (userInput.toLowerCase().includes("setup aquaponics")) {
            botMessage.textContent = "To set up aquaponics, you need a fish tank, grow bed, water pump, and plants. Would you like a step-by-step guide?";
        } else {
            botMessage.textContent = "I'm still learning! Ask me about aquaponics, plants, or fish.";
        }

        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}
