// For Scroll To Top Button.
let scrollToTopButton = document.querySelector(".scroll-to-top a");
let scrollToTopFunction = (event) => {
    event.preventDefault();
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
scrollToTopButton.addEventListener("click", scrollToTopFunction);

// For popup Gallary
let img = document.querySelectorAll(".for-img img"),
    popup = document.querySelector(".popup-gallary"),
    popupContent = document.querySelector(".popup-content"),
    emptyImg = document.querySelector(".empty-img"),
    closeButton = document.querySelector(".close-icon a");

// on click the img
function clickToImg() {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";

    popupContent.style.top = "0";
    emptyImg.src = this.src;
}

// Create ForEach because (querySelectorAll) return value to (object)
img.forEach(function (item) {
    item.addEventListener("click", clickToImg);
    emptyImg.src = this.src;
    console.log(this)
});


// on click the close Button 
const clickCloseButton = (event) => {
    event.preventDefault();
    popupContent.style.top = "-800px";
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
}
closeButton.addEventListener("click", clickCloseButton);

