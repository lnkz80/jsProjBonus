import {showHideTab, removeClassFromAllElements} from "../services/helpers"

const showHidePreview = () => {
    const  ramaIcons = document.querySelectorAll('.balcon_icons_img'),
    ramaBigImg = document.querySelectorAll('.big_img img');
    ramaBigImg[0].classList.add('show');
    ramaIcons.forEach((icon, idx)=>{        
        icon.addEventListener('click', ()=>{
            showHideTab(ramaBigImg, idx);
            removeClassFromAllElements(ramaIcons, 'do_image_more');
            icon.classList.add('do_image_more');
        });
    });
};


const calc = () => {
    const popupCalc = document.querySelector(".popup_calc");

    
    //!temp option for dev
    popupCalc.style.display = "block";
    showHidePreview();


};

export default calc;