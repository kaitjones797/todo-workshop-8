"use strict";

let userSelect = document.querySelector("#user select");

function loadUsers() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then(function (data) {
      for (const user of data) {
        let userName = user.username;
        let userOption = document.createElement("option");
        userOption.innerText = user.username;
        userOption.value = user.id;

        userSelect.appendChild(userOption);
      }
    });
}
function displayTodos() {
  const userId = userSelect.value;
}
window.onload = function () {
  loadUsers();
};
