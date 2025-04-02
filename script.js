document.getElementById("chatbot-button").addEventListener("click", function () {
    const chatContainer = document.getElementById("chatbot-container");
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
});
