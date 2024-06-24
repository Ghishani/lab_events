const enterButton = document.querySelector("#enter");
const userInput = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const dateSection = document.querySelector("#date-section");
const showDateButton = document.querySelector("#show-date");
const completedList = document.querySelector("#completed-list");

let dateShown = false;

enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    const toDoList = document.createElement("li");
    toDoList.innerText = userInput.value;
    list.appendChild(toDoList);

    const completeButton = createButton("complete", "complete-button");
    const deleteButton = createButton("delete", "delete-button");

    toDoList.appendChild(completeButton);
    toDoList.appendChild(deleteButton);
});

window.addEventListener("click", (event) => {
    event.preventDefault();
    const element = event.target;
    if(element.matches("button")){
        if (element.getAttribute("id") === "delete-button"){
            element.parentNode.remove();
        } else if (element.getAttribute("id")=== "complete-button"){
            element.parentNode.style.color = "#aaaaaa";
            element.parentNode.remove();
            completedList.appendChild(element.parentNode);
        }
    }
});

showDateButton.addEventListener("click", () => {
    if(dateShown) {
        dateShown = false;
        document.querySelector("#date").remove();
        showDateButton.innerText = "Show Date";
        return
    }
    const date = document.createElement("h2");
    date.innerText = Date();
    date.setAttribute("id", "date");
    showDateButton.innerText = "Hide Date";
    dateSection.appendChild(date);
    dateShown = true;
});

const createButton = function(buttonName, buttonId) {
    const button = document.createElement("button");
    button.setAttribute("id", buttonId);
    button.innerText = buttonName;
    return button;
}