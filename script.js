const menus = document.querySelector('.menu');
const liens = document.querySelector('.links');
const btnDrop = document.querySelector('.btn-top');
const listes = document.querySelectorAll('.menu li');

let toggleIndex;

btnDrop.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    if (!toggleIndex) {
        liens.style.height = `${liens.scrollHeight}px`;
        liens.style.margin=  '0px 0px 0px 0px';
        toggleIndex = true;
        return;
    }

    liens.style.margin=  '0px -150px 0px 0px';
    liens.style.height = 0;
    toggleIndex = false;
}
