//@ts-check

import { data } from './db.js';
import { getContentFormater, getModalContainer } from './formaters.js';

const sectionTop = document.getElementById('section-top');
const sectionBottom = document.getElementById('section-bottom');
const modalDescription = document.getElementById('modal_description');

// get values de info
const dataSectionTop = Object.values(data.topNew);
const dataSectionBot = Object.values(data.botNew);

sectionTop.innerHTML = getContentFormater(dataSectionTop);
sectionBottom.innerHTML = getContentFormater(dataSectionBot);

//#endregion

//#region getInformationModal
const getInnerContentModalDescription = () => {
  modalDescription.innerHTML = `
  <a class="modal_icon-close" href="#"
    ><img src="/assets/close-icon.svg" alt="close-icon"
  /></a>
  ${getModalContainer(dataSectionTop)}
`;
};

getInnerContentModalDescription();

window.addEventListener('resize', (event) => {
  getInnerContentModalDescription();
});

//#endregion

//#region add Class stocky header
window.onscroll = function () {
  addClassSticky();
};

const header = document.getElementById('myHeader');
const sticky = header.offsetTop;

const addClassSticky = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

//#endregion
