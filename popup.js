// Author:      Ross Harvey
// Date:        2023-07-20
// Description: Chrome extension to allow quick access to Jira tickets via keyboard shortcut

let jiraForm = document.getElementById("jira-form");
let boardOption = document.getElementById("opt-board");
jiraForm.addEventListener("submit", async () => {
    let jiraNumberInput = document.getElementById("input-jira-number");
    let ticketNumber = boardOption.value + "-" + jiraNumberInput.value;
    chrome.tabs.create({url: 'https://kyloepartners.atlassian.net/browse/' + ticketNumber, active: true});
});

window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowUp":
            boardOption.selectedIndex--;
            if (boardOption.selectedIndex === -1) {
                boardOption.selectedIndex = boardOption.length - 1;
            }
            break;
        case "ArrowDown":
            boardOption.selectedIndex++;
            if (boardOption.selectedIndex === -1) {
                boardOption.selectedIndex = 0;
            }
            break;
    }
});
