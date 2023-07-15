"use strict";
console.log("my staff pagejs");
let messageLog = [];

//button to click on staff page id is 'staffMessageTable

// const staffButton = document.getElementById("staffButt");
// if (staffButton) {
//   staffButton.addEventListener("click", renderMessages);
// }

const staffButton = document.getElementById("staffButt");
if (staffButton) {
  staffButton.addEventListener("click", openAccessToTable);
}

const cancelButton = document.getElementById("cancelButton");
if (cancelButton) {
  cancelButton.addEventListener("click", closeForm);
}

//open access to table
function openAccessToTable() {
  document.getElementById("accessForm").style.display = "block";
  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", checkAccess);
  }
}

function checkAccess(event) {
  event.preventDefault();
  const staffName = document.getElementById("staffName").value;
  const password = document.getElementById("password").value;

  if (staffName == "staff" && password == "password1234") {
    renderMessages();
    closeForm();
  } else {
    alert("access denied");
  }
}
/* if (loginButton) {
    loginButton.disabled = true;
    //refresh after a short delay
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}*/

function closeForm() {
  document.getElementById("accessForm").style.display = "none";
}

// reset form
function resetForm() {
  document.getElementById("accessForm").style.display = "reset";
}

//checkLocalStorage to take messages

function checkLocalStorage() {
  const locallyStoredData = JSON.parse(localStorage.getItem("messagesLocal"));
  if (locallyStoredData) {
    messageLog = locallyStoredData;
  }
}

//Table headers
const formCategories = ["User Name", "User Tel", "User Type"];

const staffTable = document.getElementById("staffMessageTable");
const sTable = document.createElement("table");
staffTable.appendChild(sTable);

//table headers function
function createTableHeaders() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  sTable.appendChild(tr);

  for (let i = 0; i < formCategories.length; i++) {
    const th = document.createElement("th");
    th.textContent = formCategories[i];
    tr.appendChild(th);
  }
}

// contents of the table

function renderMessages() {
  createTableHeaders();
  for (let i = 0; i < messageLog.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = messageLog[i].userName;
    tr.appendChild(td);
    console.log("I am on line 50");
    let td1 = document.createElement("td");
    td1.textContent = messageLog[i].userTel;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = messageLog[i].userCat;
    tr.appendChild(td2);
    sTable.appendChild(tr);
    console.log("I am on line 58");
  }
  staffButton.removeEventListener("click", renderMessages);
}

/*
 additional - I thought
function displayAsOrderlyList() {
  let ul = document.createElement("ul");
  if (messageLog == 0) {
    let li = document.createElement("li");
    ul.appendChild(li);
  } else {
    for (let i = 0; i < messageLog.length; i++) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.textContent = messageLog[i].userName;
      tr.appendChild(td);
      let td1 = document.createElement("td");
      td1.textContent = messageLog[i].userTel;
      tr.appendChild(td);
      let td2 = document.createElement("td");
      td2.textContent = messageLog[i].userCat;
      td2.appendChild(tr);
      sTable.appendChild(tr);
    }
  }
}
*/
checkLocalStorage();
