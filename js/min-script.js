var JenniferButton=document.querySelector(".info-button-jennifer"),ModalJennifer=document.querySelector(".modal-jennifer"),ButtonJenniferClose=document.querySelector(".modal-jennifer-close"),CharlyButton=document.querySelector(".info-button-charly"),ModalCharly=document.querySelector(".modal-charly"),ButtonCharlyClose=document.querySelector(".modal-charly-close");JenniferButton.addEventListener("click",function(e){e.preventDefault(),ModalJennifer.classList.add("modal-show")}),ButtonJenniferClose.addEventListener("click",function(e){e.preventDefault(),ModalJennifer.classList.remove("modal-show")}),CharlyButton.addEventListener("click",function(e){e.preventDefault(),ModalCharly.classList.add("modal-show")}),ButtonCharlyClose.addEventListener("click",function(e){e.preventDefault(),ModalCharly.classList.remove("modal-show")});