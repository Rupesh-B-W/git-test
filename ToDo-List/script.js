const inputBox = document.querySelector(".inputField input");//Selecting class by its attribute name and input button
const addBtn   = document.querySelector(".inputField button");//selecting class by its attribute name and button tag
const todoList = document.querySelector(".todolist")
const deleteall = document.querySelector(".footer button")


inputBox.addEventListener = ()=>{
    let userData = inputBox.value; //getting value from user entered
    (userData.trim() !=0)? addBtn.classList.add("active")      :      addBtn.classList.remove("active")
                          //if user  values arenot only spaces       // active the add button
}


if(addBtn.onclick()){
    let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem(" New Todo");
    (getLocalStorage == null) ? listArrr=[] : listArr = JSON.parse(getLocalStorage)  //creating blank array // transforming json string into a js object (using ternary operator)
    listArr.push(userData); //pushing usertypedata  into blank array
    localStorage.setItem("New Todo",JSON.stringify(listArr))//Converting js object into json string
    showTask()
} 
function showTask(){
    let getLocalStorage = localStorage.getItem("New Todo")
    (getLocalStorage == null) ? listArr = []  : listArr =  JSON.parse(getLocalStorage)
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //Passing the length value into PendingNum
    let newLiTag = ''; 
    for (let index in listArr){ // loop for getting key
        for (let aaa of Object.values(listArr)){ // loop for getting value
            newLiTag =  `<li> ${aaa} <span onclick ="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;//adding key and value
        }
    }
    todoList.innerHTML = newLiTag;
}
 
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr =JSON.parse(getLocalStorage);
    listArr.splice(index,1);//delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr)); // transforming js object into a json string
    showTasks();
}
if (deleteall.onclick()){
    listArr =[]; //empty an array
    // after delete all task again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transforming js object into a jason string
    showTask();
}
