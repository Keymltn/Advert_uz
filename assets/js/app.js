let registrationBtnEl = document.querySelector(".advert__leader-registration");
let registrationBtnCloneEl = document.querySelector(".advert__leader-registration-clone");
let popupEl = document.querySelector("#advert__popup");
let overlayEl = document.querySelector("#advert__overlay");
let popupSubmitBtn = document.getElementById("popup__submit");
let overlayCancelBtn = document.getElementById("overlay_cancel");
let popupFormEl = document.getElementById("popp_id");
let nameInputEl = document.querySelector(".advert__main-name-input");
let numInpuEl = document.querySelector(".advert__main-number-input");
let nameHrEl = document.querySelector(".advert__input-underline-frst");
let numHrEl = document.querySelector(".advert__input-underline-second");

const alphs = /^[a-zA-Z]*$/;

registrationBtnEl.addEventListener("click", () => {
  if ((popupEl.style.visibility = "hidden")) {
    popupEl.style.visibility = "visible";
    overlayEl.style.opacity = "1";
    overlayEl.style.pointerEvents = "all";
  }
});

registrationBtnCloneEl.addEventListener("click", () => {
  if ((popupEl.style.visibility = "hidden")) {
    popupEl.style.visibility = "visible";
    overlayEl.style.opacity = "1";
    overlayEl.style.pointerEvents = "all";
  }
});

overlayCancelBtn.addEventListener("click", () => {
  if ((popupEl.style.visibility = "visible")) {
    popupEl.style.visibility = "hidden";
    overlayEl.style.opacity = "0";
    overlayEl.style.pointerEvents = "none";
  }
});

popupFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // if ((nameInputEl.length <= 2) && (numInpuEl.value = "")) {
  //   console.log("alerta4");
  // } 
  if (nameInputEl.value.length <= 2) {
    console.log("alerta1");
    nameHrEl.style.backgroundColor = "red";
    nameInputEl.style.border = "none";
  } 
  else if (numInpuEl.value.length < 9) {
    console.log("alerta3");
    nameHrEl.style.backgroundColor = "#a4a4a4";
    numHrEl.style.backgroundColor = "red";
  } 
  else {
    popupEl.style.visibility = "hidden";
    overlayEl.style.opacity = "0";
    overlayEl.style.pointerEvents = "none";
    nameHrEl.style.backgroundColor = "#a4a4a4";
    numHrEl.style.backgroundColor = "#a4a4a4";
    numInpuEl.value = "";
    nameInputEl.value = "";
  }
});
