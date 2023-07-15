"use strict";
console.log("this form js is working");
let messageLog = [];

//form connection
const userForm = document.getElementById("userForm");
//Event listener
userForm.addEventListener("submit", onFormSubmit);
//form submission first state event default prevention
console.log("check Submit");

function onFormSubmit(event) {
  event.preventDefault();
  collectFormData();
}

function collectFormData() {
  const userName = document.getElementById("userName").value;
  const userTel = document.getElementById("userTel").value;
  const userCat = document.getElementById("userCat").value;

  const messHan = new MessageHandle(userName, userTel, userCat);
}

function MessageHandle(userNameArg, userTelArg, userCatArg) {
  this.userName = userNameArg;
  this.userTel = userTelArg;
  this.userCat = userCatArg;
  messageLog.push(this);
  setLocalStorage();
}

// passing information to local storage
function setLocalStorage() {
  localStorage.setItem("messagesLocal", JSON.stringify(messageLog));
}
