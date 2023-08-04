let btn = document.querySelector("button");
let validationMsg = document.querySelector(".validation-msg");
let select1 = document.getElementById("select-1");
let select2 = document.getElementById("select-2");
let select3 = document.getElementById("select-3");

btn.addEventListener("click", function () {
    if (select1.value == 9 && select2.value == 1 && select3.value == 1) {
        validationMsg.textContent = "Password 1 correcto";
        validationMsg.style.color = "initial";
    } else if (select1.value == 7 && select2.value == 1 && select3.value == 4) {
        validationMsg.textContent = "Password 2 correcto";
        validationMsg.style.color = "initial";
    } else {
        validationMsg.textContent = "Password incorrecto";
        validationMsg.style.color = "red";
    }
});
