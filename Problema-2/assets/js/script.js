let btn = document.querySelector("button");
let validationMsg = document.querySelector(".validation-msg");
let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let input3 = document.getElementById("input-3");

btn.addEventListener("click", function(){
    let total = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
    if (total > 10) {
        validationMsg.textContent = "Llevas demasiados stickers";
        validationMsg.style.color = "red";
    } else {
        validationMsg.textContent = `Llevas ${total} stickers`;
        validationMsg.style.color = "initial";
    }
});
