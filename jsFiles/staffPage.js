"use strict";
console.log("my staff pagejs");
let messageLog = [];

//button to click on staff page id is 'staffMessageTable

const staffButton = document.getElementById("staffButt");
if (staffButton) {
  staffButton.addEventListener("click", renderMessages);
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
    let td1 = document.createElement("td");
    td1.textContent = messageLog[i].useTel;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = messageLog[i].userCat;
    tr.appendChild(td2);
    sTable.appendChild(tr);
  }
  staffButton.removeEventListener("click", renderMessages);
}

checkLocalStorage();
