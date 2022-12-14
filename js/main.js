// Admin name is xojiona
// Admin admin@gmail.com
// Admin password is xojiona

"use strict";

let user_name = document.getElementById('name');
let user_email = document.getElementById('email');
let user_password = document.getElementById('password');
let elBtnFormLogin = document.getElementById('login-btn');

let users_array = [];

elBtnFormLogin.addEventListener('click', () => {
  if(user_name.value === "" || user_email.value === "" || user_password.value === "") {
    alert('Iltimos malumotlaringizni toliq kiriting')
  } else {
    if(user_name.value === "xojiona" && user_email.value === "admin@gmail.com" && user_password.value === "xojiona") {
      elBtnFormLogin.href = 'admin.html'
    } else {
      elBtnFormLogin.href = 'customer.html'
    }
  }
})