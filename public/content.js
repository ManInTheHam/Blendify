// content.js

// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Listen for messages from the background script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeColor") {
        changeBackgroundColor(request.color);
        sendResponse({status: "Color changed"});
    }
});