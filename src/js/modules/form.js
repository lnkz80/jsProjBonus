import postData from "../services/postData";
import {
  closeModal
} from "./modal";

const formCallMe = (formSelector, popupDivSelector = null) => {
  const currentForm = document.querySelectorAll(formSelector);
  const numbers = /^[0-9]+$/;
  currentForm.forEach((form) => {
    form.querySelector("button").addEventListener("click", function (e) {
      e.preventDefault();
      if (!form.userPhone.value.match(numbers)) {
        alert("В полі 'Телефон' треба вводити тільки цифри!!!");
        form.userPhone.value = "";
        return false;
      }
      //get data from form fields and convert to json
      const formData = new FormData(form);
      const postObj = Object.fromEntries(formData.entries()),
        spinner = this.querySelector("span");

      //SPINNER      
      spinner.classList.remove('submit-spinner_hide');
      this.disabled = true;
      this.style.color = "grey";
      this.style.filter = "grayscale(70%)";
      const reqUrl = "http://localhost:3000/members";


      postData(reqUrl, postObj)
        .then((data) => {
          console.log(data);
        })
        .then(
          () => {
            spinner.classList.add('submit-spinner_hide');
            this.disabled = false;
            this.style.color = "black";
            this.style.filter = "grayscale(0%)";
            form.reset();
            const span = document.createElement("span");
            span.style.color = "green";
            span.textContent = "Информация отправлена!";
            this.parentElement.append(span);
            setTimeout(() => {
              span.remove();
              closeModal(popupDivSelector);
            }, 2000);
          }
        )
        .catch((err) => console.error(err));
      console.log("Data has been posted!");
    });
  });
};

export default formCallMe;