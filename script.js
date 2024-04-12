const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    //If Input box value is empty, it shows that we must write something//
    if(inputBox.value === ''){ 
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();//Whenever we add any task ,this function will be called and it will be saved to local storage
}

listContainer.addEventListener("click", function(e){ //This JavaScript code sets up an event listener on an element with the identifier "listContainer". When a click event occurs within this container, the provided function is executed
    if(e.target.tagName === "LI"){ //This part of the code checks if the element clicked (e.target) is an <li> (list item). If it is, the code toggles the presence of the "checked" class on that list item using classList.toggle("checked"). This means that if the "checked" class is already present on the list item, it will be removed, and if it's not present, it will be added
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //This will give all the content stored in data
}
showTask();