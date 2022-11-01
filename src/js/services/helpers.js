const showHideTab = (tabs, index) => {
    tabs.forEach(tab => {
        tab.classList.remove("show");
        tab.classList.add("hide");
    });
    tabs[index].classList.remove("hide");
    tabs[index].classList.add("show");
};

const removeClassFromAllElements = (el, rmClass) => el.forEach(item=>item.classList.remove(rmClass));

export {showHideTab, removeClassFromAllElements}