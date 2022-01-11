//@ts-check

// add Class stocky header
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
