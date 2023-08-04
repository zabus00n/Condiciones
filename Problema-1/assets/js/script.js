let clickMe = document.querySelector("img");
let imgBorder = false;
clickMe.addEventListener("click", imageBorderState);
function imageBorderState() {
    if (!imgBorder) {
        clickMe.style.border = "2px solid red";
    } else {
        clickMe.style.border = "none";
    }
    imgBorder = !imgBorder;
}
