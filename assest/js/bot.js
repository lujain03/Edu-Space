// Toggle the display of the chatbot container
document.getElementById("chatbot-launcher").addEventListener("click", function() {
    let chatbotContainer = document.getElementById("chatbot-container");
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex";
    } else {
        chatbotContainer.style.display = "none";
    }
});

// Hide the chatbot container when the close button is clicked
document.getElementById("chatbot-close").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

// Handle sending messages and simulating bot responses
document.getElementById("chatbot-send").addEventListener("click", function() {
    let message = document.getElementById("chatbot-text").value;
    if (message) {
        addMessage("user", message); // Add user message to the chat
        document.getElementById("chatbot-text").value = ""; // Clear input field
        // Simulate a bot response after a delay
        setTimeout(() => {
            addMessage("bot", "This is a response from Neptune! How can I assist you?");
        }, 1000);
    }
});

// Function to add messages to the chat container
function addMessage(sender, text) {
    let messages = document.getElementById("chatbot-messages");
    let messageElem = document.createElement("div");
    messageElem.className = sender === "user" ? "user-message" : "bot-message";
    messageElem.innerText = text;
    messages.appendChild(messageElem);
    messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
}
