var JenniferButton = document.querySelector(".info-button-jennifer");
var ModalJennifer = document.querySelector(".modal-jennifer");
var ButtonJenniferClose = document.querySelector(".modal-jennifer-close");
var ForwardButton = document.querySelector(".switch-forward");
var PetListFirst = document.querySelector(".pet-list-1");
var PetListSecond = document.querySelector(".pet-list-2");
var BackButton = document.querySelector(".switch-back");

JenniferButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalJennifer.classList.add("modal-show");

})

ButtonJenniferClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalJennifer.classList.remove("modal-show");

})

ForwardButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    PetListFirst.classList.add("list-close");
    PetListSecond.classList.remove("list-close");

})

BackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    PetListFirst.classList.remove("list-close");
    PetListSecond.classList.add("list-close");
    
})