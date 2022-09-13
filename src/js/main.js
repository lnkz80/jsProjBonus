"use strict";
import postData from "./services/postData";
import formCallMe from "./modules/form";
import modal from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
  const reqUrl = "https://jsonplaceholder.typicode.com/todos/1";
  const req = postData("GET", reqUrl);
  console.log(req);
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err));

  modal(".popup_engineer_btn", ".popup_engineer");
  modal(".phone_link", ".popup");
  formCallMe(".main_form");
  formCallMe(".popup_form");
});
