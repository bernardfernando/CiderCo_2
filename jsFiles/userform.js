"use strict";
console.log("this form js is working");
let messageLog = [];

//form connection
const userForm = document.getElementById("userForm");

//Event listener
userForm.addEventListener("submit", onFormSubmit);
//form submission first state event default prevention

function onFormSubmit(event) {
  event.preventDefault();
  collectFormData();
}

function collectFormData() {
  const userName = document.getElementById("userName").Value;
  const userTel = document.getElementById("userTel").value;
  const userCat = document.getElementById("userCat").value;
}

function MessageHandle(userNameArg, userTelArg, userCatArg) {
  this.userNameArg = userName;
  this.userTelArg = userTel;
  this.userCatArg = userCat;
  messageLog.push(this);
  setLocalStorage();
}

const messHan = new MessageHandle(userName, userTel, userCat);

// passing information to local storage
function setLocalStorage() {
  localStorage.setItem("messagesLocal", JSON.stringify(messageLog));
}
