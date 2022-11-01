import {showHideTab} from "../services/helpers"

const tabs = () => {
    const tabContent = document.querySelectorAll(".glazing_content"),
        tabBlock = document.querySelectorAll(".glazing_block");
    

    tabBlock.forEach((block, idx) => {        
        block.querySelector("img").style.cursor = "pointer";        
        block.addEventListener("click", () => {
                showHideTab(tabContent, idx);
            });
    });
};

export default tabs;