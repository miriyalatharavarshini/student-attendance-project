// CO4: DOM Manipulation (Accessing HTML elements)

const studentNameInput=document.getElementById("studentName");
const attendanceStatusInput=document.getElementById("attendanceStatus");
const addBtn=document.getElementById("addBtn");
const attendanceList=document.getElementById("attendanceList");
const emptyMsg=document.getElementById("emptyMsg");
const searchBtn=document.getElementById("searchBtn");
const sortBtn=document.getElementById("sortBtn");
const clearBtn=document.getElementById("clearBtn");
const searchResult=document.getElementById("searchResult");

// CO3: Array and Objects

let students=[];


// CO3: Function
function showEmptyMessage(){

if(students.length===0){ // CO3: Condition
emptyMsg.style.display="block";
attendanceList.innerHTML="";
}else{
emptyMsg.style.display="none";
}

}


// CO4: DOM Manipulation
function renderStudents(){

attendanceList.innerHTML="";

students.forEach(function(student,index){ // CO3: Loop + Callback function

const li=document.createElement("li"); // CO4 DOM

li.innerHTML=
"<span>"+student.name+" : "+student.status+"</span>"+
"<button data-index='"+index+"'>Remove</button>";

attendanceList.appendChild(li);

});

bindRemoveButtons();

showEmptyMessage();

}


// CO4: Event Binding
function bindRemoveButtons(){

const removeBtns=attendanceList.querySelectorAll("button");

removeBtns.forEach(function(btn){

btn.onclick=function(){

const index=parseInt(btn.getAttribute("data-index"));

students.splice(index,1); // CO3: Array method

renderStudents();

};

});

}


// CO5: Handling user input dynamically
function addStudent(){

const name=studentNameInput.value.trim();
const status=attendanceStatusInput.value;

if(!name){ // CO3 Condition
alert("Enter student name");
return;
}

// CO3 Object creation
students.push({name:name,status:status});

studentNameInput.value="";

renderStudents();

}


// CO3: Loop and String functions
function searchStudent(){

const query=prompt("Enter student name");

if(query===null)return;

const q=query.toLowerCase();

searchResult.classList.remove("show","found","not-found");

for(let i=0;i<students.length;i++){ // CO3 Loop

if(students[i].name.toLowerCase().includes(q)){

searchResult.textContent="Found: "+students[i].name+" ("+students[i].status+")";

searchResult.classList.add("show","found");

return;

}

}

searchResult.textContent="Student not found";

searchResult.classList.add("show","not-found");

}


// CO3: Sorting arrays
function sortStudents(){

students.sort(function(a,b){

return a.name.localeCompare(b.name);

});

renderStudents();

}


// CO4: Event interaction
function clearAll(){

if(confirm("Delete all records?")){

students=[];

renderStudents();

searchResult.classList.remove("show");

}

}


// CO4: Event Listeners
addBtn.addEventListener("click",addStudent);
searchBtn.addEventListener("click",searchStudent);
sortBtn.addEventListener("click",sortStudents);
clearBtn.addEventListener("click",clearAll);

showEmptyMessage();
