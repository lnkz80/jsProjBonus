import postData from "../services/postData";

const formCallMe = (formSelector) => {
  const forms = document.querySelectorAll(formSelector);
  const numbers = /^[0-9]+$/;
  forms.forEach((form) => {
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
        buttonValue = this.textContent,
        spinner = this.querySelector("span");

      //SPINNER
      // this.innerHTML = '<img src="./assets/img/main/spinner.gif">';
      // this.innerHTML = '<span class="submit-spinner submit-spinner_hide"></span>';
      spinner.classList.remove('submit-spinner_hide');
      this.disabled = true;
      this.style.color = "grey";
      this.style.filter = "grayscale(70%)";
      const reqUrl = "http://localhost:3000/members";
      // let nextPostId = 1;

      postData(reqUrl, postObj)
        .then((data) => {
          console.log(data);
          // this.textContent = buttonValue;
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
            }, 3000);
          }
        )
        .catch((err) => console.error(err));
      console.log("Data has been posted!");
    });
  });
};

export default formCallMe;