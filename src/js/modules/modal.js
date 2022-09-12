import formCallMe from "./form";
//MODAL's open&close functions
const openModal = (modObj) => {
  modObj.classList.remove("hide");
  modObj.classList.add("show");
};

const closeModal = (modObj) => {
  modObj.classList.remove("show");
  modObj.classList.add("hide");
};

const modal = (modTriggerSelector, modalWindowSelector) => {
  const modTrigger = document.querySelectorAll(modTriggerSelector),
    modalWindow = document.querySelector(modalWindowSelector);

  //open modal window event
  modTrigger.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalWindow);
      formCallMe(".main_form.show");
    });
  });

  //close modal window event (add "data-close attr to index.html")
  modalWindow.addEventListener("click", (e) => {
    if (
      e.target === modalWindow ||
      e.target.parentElement.getAttribute("data-close") == ""
    ) {
      closeModal(modalWindow);
    }
  });
};

export default modal;