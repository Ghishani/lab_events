const enterButton = document.querySelector("#enter");
const userInput = document.querySelector("#new-todo");
const list = document.querySelector("#list");

enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    const toDoList = document.createElement("li");
    toDoList.innerText = userInput.value;
    list.appendChild(toDoList);
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.innerText = "delete";
    toDoList.appendChild(deleteButton);
});

list.addEventListener("click", (event) => {
    const element = event.target;
    if(element.matches("button")){
        if (element.getAttribute("id")=== "delete-button"){
            element.parentNode.remove();
        }
    }
});

