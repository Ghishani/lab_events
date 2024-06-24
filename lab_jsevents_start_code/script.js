const enterButton = document.querySelector("#enter");
enterButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});