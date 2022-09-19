import postData from "../services/postData";

const formCallMe = (formSelector) => {
  const forms = document.querySelectorAll(formSelector);
  const numbers = /^[0-9]+$/;
  forms.forEach((form) => {
    // form.querySelector('[name="user_phone"]').addEventListener("keyup", () => {
    //     console.log(form.querySelector('[name="user_phone"]').value);
    // });
    // console.log(form);
    form.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      if (!form.userPhone.value.match(numbers)) {
        alert("В полі 'Телефон' треба вводити тільки цифри!!!");
        form.userPhone.value = "";
        // form.querySelector('[name="user_phone"]').value = "";
        return false;
      }
      //get data from form fields and convert to json
      const formData = new FormData(form);
      // const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //HERE MUST BE A POSTDATA FUNCTION WITH AJAX
      const postObj = Object.fromEntries(formData.entries());

      const reqUrl = "http://localhost:3000/members";
      let nextPostId = 1;
      postData(reqUrl)
        .then((data) => {
          postObj.id = data.length + 1;
          postData(reqUrl, postObj)
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
      console.log("Data has been posted!");
    });
  });
};

export default formCallMe;
