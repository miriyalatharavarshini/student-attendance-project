const studentNameInput=document.getElementById("studentName");
const attendanceStatusInput=document.getElementById("attendanceStatus");
const addBtn=document.getElementById("addBtn");
const attendanceList=document.getElementById("attendanceList");
const emptyMsg=document.getElementById("emptyMsg");
const searchBtn=document.getElementById("searchBtn");
const sortBtn=document.getElementById("sortBtn");
const clearBtn=document.getElementById("clearBtn");
const searchResult=document.getElementById("searchResult");

let students=[];

function showEmptyMessage(){
if(students.length===0){
emptyMsg.style.display="block";
attendanceList.innerHTML="";
}else{
emptyMsg.style.display="none";
}
}

function renderStudents(){
attendanceList.innerHTML="";

students.forEach(function(student,index){

const li=document.createElement("li");

li.innerHTML=
"<span>"+student.name+" : "+student.status+"</span>"+
"<button data-index='"+index+"'>Remove</button>";

attendanceList.appendChild(li);

});

bindRemoveButtons();
showEmptyMessage();
}

function bindRemoveButtons(){

const removeBtns=attendanceList.querySelectorAll("button");

removeBtns.forEach(function(btn){

btn.onclick=function(){

const index=parseInt(btn.getAttribute("data-index"));

students.splice(index,1);

renderStudents();

};

});
}

function addStudent(){

const name=studentNameInput.value.trim();
const status=attendanceStatusInput.value;

if(!name){
alert("Enter student name");
return;
}

students.push({name:name,status:status});

studentNameInput.value="";

renderStudents();
}

function searchStudent(){

const query=prompt("Enter student name");

if(query===null)return;

const q=query.toLowerCase();

searchResult.classList.remove("show","found","not-found");

for(let i=0;i<students.length;i++){

if(students[i].name.toLowerCase().includes(q)){

searchResult.textContent="Found: "+students[i].name+" ("+students[i].status+")";

searchResult.classList.add("show","found");

return;
}
}

searchResult.textContent="Student not found";

searchResult.classList.add("show","not-found");
}

function sortStudents(){

students.sort(function(a,b){

return a.name.localeCompare(b.name);

});

renderStudents();
}

function clearAll(){

if(confirm("Delete all records?")){

students=[];

renderStudents();

searchResult.classList.remove("show");

}
}

addBtn.addEventListener("click",addStudent);
searchBtn.addEventListener("click",searchStudent);
sortBtn.addEventListener("click",sortStudents);
clearBtn.addEventListener("click",clearAll);

showEmptyMessage();