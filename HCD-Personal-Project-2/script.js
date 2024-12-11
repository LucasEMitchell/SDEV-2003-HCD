let content = document.getElementById("content-container");
let success = document.getElementById("success");
///function subscrib() {
//  if (submission() == false) {
//   alert("Invalid email");
//   //send to next page//
//}
//}
//function submission(form) {
// for (let i = 0; i < form.elements.length; i++) {
//  let element = form.elements[i];
// if (element.value) {
//    return false;
//  }
//  return true;
//}
//}

//tring to figure out how to validate the email//

//function subscribe() {
//function validation(e) {
// const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//  return patt.test(e);
//}
//const e = "example@domain.com";

//this is what I came up with but cannot seem to make work//

//var validation = ""
//function subscribe() {
//if (validation == "true") {
//  content.style.display = "none";
//  success.style.display = "flex";
//} else {
///  return;
//}
//}
//function dismiss() {
//content.style.display = "flex";
//success.style.display = "none"
//}

//function validation() {
//   if (document.getElementById(input) == "email@email.com"){
//   validation == "true";
//   subscribe();
//   } else {
//       return subscribe();
//    }
//}

function validation() {
  content.style.display = "none";
  success.style.display = "flex";
}
function dismiss() {
  content.style.display = "flex";
  success.style.display = "none";
}
