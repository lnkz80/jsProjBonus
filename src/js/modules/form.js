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
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //HERE MUST BE A POSTDATA FUNCTION WITH AJAX
      console.log(Object.fromEntries(formData.entries()));
      console.log("Data has been posted!");
    });
  });
};

export default formCallMe;
