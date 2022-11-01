import {showHideTab, removeClassFromAllElements, isNumber} from "../services/helpers";

const calcData ={
    type: '1',
    width: 0,
    height: 0,
};

// інтерактив показу превьюшек типу балконів у першому вікні калькулятора
const showHidePreview = () => {
    const  ramaIcons = document.querySelectorAll('.balcon_icons_img'),
    ramaBigImg = document.querySelectorAll('.big_img img');
    ramaBigImg[0].classList.add('show');
    ramaIcons.forEach((icon, idx)=>{        
        icon.addEventListener('click', (e)=>{
            showHideTab(ramaBigImg, idx);
            removeClassFromAllElements(ramaIcons, 'do_image_more');
            icon.classList.add('do_image_more');
            calcData.type = e.target.parentElement.dataset.type;            
        });
    });
};


const calc = () => {
    const popupCalc = document.querySelector(".popup_calc");
    showHidePreview();
    
    //?===== temp option for dev =====>
    popupCalc.style.display = "block";
    //?===============================<
   
    popupCalc.querySelector('.button').addEventListener('click', ()=>{
        const width = +document.getElementById('width').value,
        height = +document.getElementById('height').value;        
        if (!isNumber(width) || !isNumber(height) || width<=0 || height<=0) {
            alert("Please, enter only numbers in fields...");            
            return false;            
        }
        calcData.width = width;
        calcData.height = height;
        //! Add transition to 2nd modal window 
        
        


        //?==== temp show data obj in log =====>
        console.log('calcData: ', calcData);
        //?====================================<
    });

};

export default calc;