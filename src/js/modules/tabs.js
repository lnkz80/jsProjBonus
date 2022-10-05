const tabs = () => {
    const tabContent = document.querySelectorAll(".glazing_content"),
        tabBlock = document.querySelectorAll(".glazing_block");
    const showHideTab = (tabs, index) => {
        tabs.forEach(tab => {
            tab.classList.remove("show");
            tab.classList.add("hide");
        });
        tabs[index].classList.remove("hide");
        tabs[index].classList.add("show");
    };

    tabBlock.forEach((block, idx) => {
        block.querySelector("img").style.cursor = "pointer";
        block.children.forEach(elem => {
            elem.addEventListener("click", () => {
                showHideTab(tabContent, idx);
            });
        });
    });
};

export default tabs;