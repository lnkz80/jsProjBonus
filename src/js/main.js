"use strict";
import postData from "./services/postData";
import formCallMe from "./modules/form";
import modal from "./modules/modal";
import tabs from "./modules/tabs";


document.addEventListener("DOMContentLoaded", () => {
  modal(".popup_engineer_btn", ".popup_engineer");
  modal(".phone_link", ".popup");
  formCallMe(".main_form");
  tabs();
});