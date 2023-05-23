let shareOptions = document.querySelector(".main-container__s2__author__share__options");
let shareButton = document.querySelector(".main-container__s2__author__share__btn");
shareButton.addEventListener("click", function(){
    shareOptions.classList.toggle("active")
});

document.addEventListener("click", function(event) {
    if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
        shareOptions.classList.remove('active');
    }
});