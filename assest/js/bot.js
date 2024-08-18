document.getElementById("chatbot-launcher").addEventListener("click", function() {
    let chatbotContainer = document.getElementById("chatbot-container");
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex";
    } else {
        chatbotContainer.style.display = "none";
    }
});

document.getElementById("chatbot-close").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("chatbot-send").addEventListener("click", function() {
    let message = document.getElementById("chatbot-text").value;
    if (message) {
        addMessage("user", message);
        document.getElementById("chatbot-text").value = "";
        // Simulate a bot response for now
        setTimeout(() => {
            addMessage("bot", "This is a response from EduBot! How can I assist you?");
        }, 1000);
    }
});

function addMessage(sender, text) {
    let messages = document.getElementById("chatbot-messages");
    let messageElem = document.createElement("div");
    messageElem.className = sender === "user" ? "user-message" : "bot-message";
    messageElem.innerText = text;
    messages.appendChild(messageElem);
    messages.scrollTop = messages.scrollHeight;
}

document.write(`
<style>
    .user-message { text-align: right; margin: 5px 0; }
    .bot-message { text-align: left; margin: 5px 0; }
</style>
`);
