const enterButton = document.querySelector("#enter");
const userInput = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const dateSection = document.querySelector("#date-section");
const showDateButton = document.querySelector("#show-date");

let dateShown = false;

enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    const toDoList = document.createElement("li");
    toDoList.innerText = userInput.value;
    list.appendChild(toDoList);
    const completeButton = document.createElement("button");
    completeButton.setAttribute("id", "complete-button");
    completeButton.innerText = "complete";
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.innerText = "delete";
    toDoList.appendChild(completeButton);
    toDoList.appendChild(deleteButton);
});

list.addEventListener("click", (event) => {
    const element = event.target;
    if(element.matches("button")){
        if (element.getAttribute("id") === "delete-button"){
            element.parentNode.remove();
        } else if (element.getAttribute("id")=== "complete-button"){
            element.parentNode.style.color = "#aaaaaa"
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
})