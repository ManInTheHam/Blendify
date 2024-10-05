document.getElementById("changeColorButton").addEventListener("click", () => {
    const color = document.getElementById("colorInput").value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "changeColor", color: color});
    });
});