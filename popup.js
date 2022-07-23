document.getElementById("form-submit").addEventListener("click", onSubmit);

function onSubmit(){
    let task = document.getElementById("task").value;
    let taskContainer = document.getElementById("tasks-container");
    let li = document.createElement("li");
    li.innerHTML = "<p>"+task+"</p>";
    // let liTextNode = document.createTextNode("<p>"+task+"</p>");
    // li.appendChild(liTextNode);
    taskContainer.append(li);
}