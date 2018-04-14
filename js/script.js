var JenniferButton = document.querySelector(".info-button-jennifer");
var ModalJennifer = document.querySelector(".modal-jennifer");
var ButtonJenniferClose = document.querySelector(".modal-jennifer-close");
var CharlyButton = document.querySelector(".info-button-charly");
var ModalCharly = document.querySelector(".modal-charly");
var ButtonCharlyClose = document.querySelector(".modal-charly-close");

JenniferButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalJennifer.classList.add("modal-show");

})

ButtonJenniferClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalJennifer.classList.remove("modal-show");
    
})

CharlyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalCharly.classList.add("modal-show");

})

ButtonCharlyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalCharly.classList.remove("modal-show");
})
