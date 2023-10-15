let registrationBtnEl = document.querySelector(".advert__leader-registration");
let popupEl = document.querySelector("#advert__popup");
let overlayEl = document.querySelector("#advert__overlay");
let popupSubmitBtn = document.getElementById("popup__submit");
let overlayCancelBtn = document.getElementById("overlay_cancel");
let overlayCancelLayer = document.querySelector(".advert__main-overlay");
let popupFormEl = document.getElementById("popp_id");
let nameInputEl = document.querySelector(".advert__main-name-input");
let numInpuEl = document.querySelector(".advert__main-number-input");
let nameHrEl = document.querySelector(".advert__input-underline-frst");
let numHrEl = document.querySelector(".advert__input-underline-second");
let topPopupEl1 = document.querySelector(".advert__main-top-popup-first");
let topPopupEl2 = document.querySelector(".advert__main-top-popup-second");
let countDownEl = document.querySelector(".advert__place-left-p")

registrationBtnEl.addEventListener("click", () => {
  if (popupEl.style.visibility = "hidden") {
    popupEl.style.visibility = "visible";
    overlayEl.style.opacity = "1";
    overlayEl.style.pointerEvents = "all";
  }
});

overlayCancelBtn.addEventListener("click", () => {
  if (popupEl.style.visibility = "visible") {
    popupEl.style.visibility = "hidden";
    overlayEl.style.opacity = "0";
    overlayEl.style.pointerEvents = "none";
  }
});

overlayCancelLayer.addEventListener("click", () => {
  if (popupEl.style.visibility = "visible") {
    popupEl.style.visibility = "hidden";
    overlayEl.style.opacity = "0";
    overlayEl.style.pointerEvents = "none";
  }
});

popupFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInputEl.value === '' && numInpuEl.value === '') {
    numHrEl.style.backgroundColor = "red";
    nameHrEl.style.backgroundColor = "red";
  }
  else if (nameInputEl.value.length <= 2) {
    nameHrEl.style.backgroundColor = "red";
    nameInputEl.style.border = "none";
  }
  else if (numInpuEl.value.length < 9) {
    nameHrEl.style.backgroundColor = "#a4a4a4";
    numHrEl.style.backgroundColor = "red";
  }
  else {
    popupEl.style.visibility = "hidden";
    overlayEl.style.opacity = "0";
    overlayEl.style.pointerEvents = "none";
    numInpuEl.value = "";
    nameInputEl.value = "";
    nameHrEl.style.backgroundColor = "#a4a4a4";
    numHrEl.style.backgroundColor = "#a4a4a4";
  }
});

setTimeout(() => {
  if (topPopupEl1.style.top = '-25%') {
    topPopupEl1.style.top = '5%';
    countDownEl.innerHTML = 'Joylar soni: 15 ta'
  }
}, 6000);

setTimeout(() => {
  if (topPopupEl1.style.top = '5%') {
    topPopupEl1.style.top = '-25%';
    return false
  }
}, 9000);

setTimeout(() => {
  if (topPopupEl2.style.top = '-25%') {
    topPopupEl2.style.top = '5%';
    countDownEl.innerHTML = 'Joylar soni: 14 ta'
  }
}, 13000);

setTimeout(() => {
  if (topPopupEl2.style.top = '5%') {
    topPopupEl2.style.top = '-25%';
    return false
  }
}, 16000);