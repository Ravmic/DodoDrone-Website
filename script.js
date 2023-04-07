// EFECT MENU

const menuOpen = document.querySelector('.menuHeader .fa-bars')
const menuClose = document.querySelector('.menuHeader .fa-times')
const menuIconBox = document.querySelector('.menuBurger')
const menu = document.querySelector(".menuHeader")


function menuSlide() {
  menu.classList.toggle("active")
  menuOpen.classList.toggle('active')
  menuClose.classList.toggle('active')
  menuIconBox.classList.toggle('active')

}

menuIconBox.addEventListener('click', menuSlide)


// MY PHOTO EFFECT

const myPhoto = document.querySelector('.aboutWrap .myPhoto')


function myPhotoRotate() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const photoHeight = document.querySelector('.aboutMe .myPhoto').offsetHeight
  const photoOffset = document.querySelector('.aboutMe .myPhoto').offsetTop

  if (scrollPosition > photoHeight + photoOffset - windowHeight) {
    myPhoto.classList.add('active');
  }


}
document.addEventListener('scroll', myPhotoRotate)
// EFECT PHOTOS SCROLL

const arrowDownP = document.querySelector('.instalink div.arrowDown');
const arrowDownIconP = document.querySelector('.instalink div.arrowDown .fa-angle-down')
const photos = document.querySelector('.photos');
const photosHeight = document.querySelector('.photos').offsetHeight


let counterP = 0

function photosScroll() {
  const photosWrapHeight = document.querySelector('.photos .photosWrap').offsetHeight
  const sectionTitleHeight = document.querySelector('.photos .SectionTitle').offsetHeight

  if (counterP >= 0) {
    photos.style.height = photosWrapHeight + sectionTitleHeight + 'px';
    arrowDownIconP.classList.toggle('active');
    counterP--
  } else {
    photos.style.height = photosHeight + 'px';
    arrowDownIconP.classList.toggle('active');
    counterP++
  }
}

arrowDownP.addEventListener('click', photosScroll);



//  EQUIPMENT SECTION ANIMATION

function eqSlide() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const sectionTitleHeight = document.querySelector('.photos .SectionTitle').offsetHeight

  const eq1 = document.querySelector('.equipment .eqwrap:nth-of-type(1)')
  const eq2 = document.querySelector('.equipment .eqwrap:nth-of-type(2)')
  const eq3 = document.querySelector('.equipment .eqwrap:nth-of-type(3)')
  const eq4 = document.querySelector('.equipment .eqwrap:nth-of-type(4)')

  const eq1height = document.querySelector('.equipment .eqwrap:nth-of-type(1)').offsetHeight;
  const eq2height = document.querySelector('.equipment .eqwrap:nth-of-type(2)').offsetHeight;
  const eq3height = document.querySelector('.equipment .eqwrap:nth-of-type(3)').offsetHeight;
  const eq4height = document.querySelector('.equipment .eqwrap:nth-of-type(4)').offsetHeight;

  const eq1offset = document.querySelector('.equipment .eqwrap:nth-of-type(1)').offsetTop;
  const eq2offset = document.querySelector('.equipment .eqwrap:nth-of-type(2)').offsetTop;
  const eq3offset = document.querySelector('.equipment .eqwrap:nth-of-type(3)').offsetTop;
  const eq4offset = document.querySelector('.equipment .eqwrap:nth-of-type(4)').offsetTop;

  if (scrollPosition > eq1offset + eq1height - windowHeight) {
    eq1.classList.add('active')
  }

  if (scrollPosition > eq2offset + eq2height - windowHeight) {
    eq2.classList.add('active')
  }


  if (scrollPosition > eq3offset + eq3height - windowHeight) {
    eq3.classList.add('active')
  }

  if (scrollPosition > eq4offset + eq4height - windowHeight) {
    eq4.classList.add('active')
  }
  if (scrollPosition < 500) {
    eq1.classList.remove('active')
    eq2.classList.remove('active')
    eq3.classList.remove('active')
    eq4.classList.remove('active')

  }
}


document.addEventListener('scroll', eqSlide)


//  CONTACT SLIDE FROM FAKEFOOTER

const contact = document.querySelector(".realFooter");
const contactCloseBtn = document.querySelector(".realFooter i.fa-times");
const contactBtn = document.querySelector(".menuHeader .contactBtn");
const fakeFooter = document.querySelector('.fakeFooter');


function fakeFooterSlide() {
  contact.classList.add('active');
}
function contactClose() {
  contact.classList.remove('active');
}

fakeFooter.addEventListener('click', fakeFooterSlide);

contactCloseBtn.addEventListener('click', contactClose);


//  CONTACT SLIDE FROM MENU

function contactOpen() {
  contact.classList.add('active');
}

contactBtn.addEventListener('click', contactOpen);
contactBtn.addEventListener('click', menuSlide);


// MENU SCROLL EFECT

const menuScroll = function () {

  const sectionName = this.className
  if (sectionName === "contactBtn") return;
  document.querySelector(`[data-section=${sectionName}]`).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  menuSlide()
}
document.querySelectorAll('.menuHeader ul li').forEach((btn) => {
  btn.addEventListener('click', menuScroll)

})




// OFFER EFECT

function offersEffect() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const offerWrap = document.querySelector('.offers .offerswrap');
  const offerOffset = document.querySelector('.offers').offsetTop;
  const offerHeight = document.querySelector('.offers').offsetHeight;

  if (scrollPosition >= offerHeight / 2 + offerOffset - windowHeight) {
    offerWrap.classList.add('active');
  }
}

window.addEventListener('scroll', offersEffect)