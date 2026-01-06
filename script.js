const chatBox = document.getElementById("chat-box");

// Simple FAQ-based training data
const responses = [
    { keywords: ["hello", "hi"], reply: "Hello! How can I help you?" },
    { keywords: ["name"], reply: "I am an AI Chatbot built using JavaScript." },
    { keywords: ["java"], reply: "Java is a powerful object-oriented programming language." },
    { keywords: ["ai"], reply: "Artificial Intelligence enables machines to think and learn." },
    { keywords: ["help"], reply: "Sure! Ask me about Java, AI, or general questions." },
    { keywords: ["bye"], reply: "Goodbye! Have a great day 😊" }
];

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput === "") return;

    addMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    setTimeout(() => {
        const botReply = getBotResponse(userInput);
        addMessage(botReply, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// NLP-like keyword matching
function getBotResponse(input) {
    const text = input.toLowerCase();

    for (let item of responses) {
        for (let keyword of item.keywords) {
            if (text.includes(keyword)) {
                return item.reply;
            }
        }
    }
    return "Sorry, I didn't understand that. Can you rephrase?";
}
