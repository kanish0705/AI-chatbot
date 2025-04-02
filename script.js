document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatbot = document.getElementById("chatbot");
    const closeChat = document.getElementById("closeChat");

    chatButton.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    });

    closeChat.addEventListener("click", function () {
        chatbot.style.display = "none";
    });
});
