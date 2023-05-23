// HEADER PHOTO SLIDER 
let changeIndex = 0;

const bgiHeader = document.querySelector(".videoHeader .bgiMobile")
const bgiBoard = ["pic/banner img/banner1.webp", "pic/banner img/banner2.webp", "pic/banner img/banner3.webp", "pic/banner img/banner4.webp"];

function bannerAnimation() {
  changeIndex++
  if (changeIndex == 4) {
    changeIndex = 0
  }

  bgiHeader.src = bgiBoard[changeIndex];

}

setInterval(bannerAnimation, 4000);

// MENU SLIDER

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

// PHONE AND MAIL SLIDER ON DESKTOP EFFECTS

const contactSlideDesktop = function () {
  const btnClass = this.parentElement.className
  const slidingElement = document.querySelector(`a.${btnClass}`)
  slidingElement.classList.toggle('active')

}

document.querySelectorAll('div.contactBtn').forEach((btn) => btn.addEventListener("click", contactSlideDesktop))

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

// CHECK IF MOBILE VERSION
let resizeCheck = false
const bannerVideo = document.querySelector('video.videoDD');
const phoneBtn = document.querySelector('li.phone')
const mailBtn = document.querySelector('li.mail')

const mobileViewport = window.matchMedia("(max-width: 700px)")
const mobileLandscapeViewport = window.matchMedia("(max-width: 916px) and (max-height: 500px) and (orientation: landscape)")

const checkIfMobile = (mobPortrait, mobLandscape) => {

  if (mobLandscape || mobPortrait) {
    if (resizeCheck) {

      mobileView()
      resizeCheck = false
    } else {
      return
    }
  } else {
    if (!resizeCheck) {

      desktopView()
      resizeCheck = true
    } else { return }
  }
}

const mobileView = () => {
  bannerVideo.removeAttribute("src")
  phoneBtn.innerHTML = '<div class="contactBtn"> <a href=tel:777-777-777> telefon <i class="fa-solid fa-phone"></i></a> </div>'
  mailBtn.innerHTML = '<div class="contactBtn"> <a href="mailto:lorem@ipsum.com"> mail <i class="fa-regular fa-envelope"></i></a> </div>'
}

const desktopView = () => {
  bannerVideo.setAttribute("src", 'video/banner.mp4')
  phoneBtn.innerHTML = `<div class="contactBtn"> telefon <i class="fa-solid fa-phone"></i> <a class="phone slider" href=tel:777-777-777>777-777-777</a> </div>`
  mailBtn.innerHTML = `<div class="contactBtn"> mail <i class="fa-regular fa-envelope"></i> <a class="mail slider" href="mailto:lorem@ipsum.com">lorem@ipsum.com</a> </div>`
  //repeated because it wont work
  document.querySelectorAll('div.contactBtn').forEach((btn) => btn.addEventListener("click", contactSlideDesktop))
}

//listener
window.addEventListener("resize", () => checkIfMobile(mobileViewport.matches, mobileLandscapeViewport.matches))
//init when get on site
checkIfMobile(mobileViewport.matches, mobileLandscapeViewport.matches)