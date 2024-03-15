var modal3 = document.getElementById("myModal3");
var modalContentAnimation3 = document.getElementById("modal-content-animation3");
var btn3 = document.getElementById("openModalBtn3");
var span3 = document.getElementsByClassName("close3")[0];
var nameInput3 = document.getElementById("nameInput3");
var emailInput3 = document.getElementById("emailInput3");
var numberInput3 = document.getElementById("numberInput3");
var step1RegisterBtn3 = document.getElementById("step1RegisterBtn3");
var emailInputBox3 = document.getElementById("emailInput-box3");
var nameInputBox3 = document.getElementById("nameInput-box3");
var numberInputBox3 = document.getElementById("numberInput-box3");
var dropdown3 = document.getElementById("dropdown3");
var step2RegisterBtn3 = document.getElementById("step2RegisterBtn3");
btn3.onclick = function () {
    modal3.style.display = "block";
    modalContentAnimation3.style.transform = "translateY(5%)";
    modalContentAnimation3.style.transition = "transform 2s";
    document.getElementById("step13").style.display = "block";
    document.getElementById("step23").style.display = "none";
    nameInput3.value = "";
    emailInput3.value = "";
    numberInput3.value = "";
    dropdown3.selectedIndex = 0;
    clearErrorMessages3();
};
span3.onclick = function () {
    modal3.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};
step1RegisterBtn3.onclick = function () {
    if (validateStep13()) {
        document.getElementById("step13").style.display = "none";
        document.getElementById("step23").style.display = "block";
        clearErrorMessages3();
    }
};
step2RegisterBtn3.onclick = function () {
    var name = nameInput3.value;
    var email = emailInput3.value;
    var number = numberInput3.value;
    var selectedOption = dropdown3.value;
    var data = {
        name: name,
        email: email,
        number: `'+61 ${number}'`,
        selectedTime: selectedOption,
    };
    fetch("https://conditional-drop-down-menu-backend.vercel.app/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response) {
                console.log(response.ok);
                modal3.style.display = "none";
                window.location.href =
                    "https://bossyourlifetoday.clickfunnels.com/pre-webinar1710172431922?fbclid=IwAR2b71xZAVe-4-CKpqVrV1Z5LE5hqWzhfaCtd-e0kbevojXh_SLXVmsYzRo";
                showSuccessMessage();
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
var validateStep13 = function () {
    let isValid = true;
    clearErrorMessages3();
    if (nameInput3.value === "") {
        displayErrorMessage3(nameInputBox3, "Please enter your name");
        isValid = false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput3.value)) {
        displayErrorMessage3(emailInputBox3, "Email is not valid");
        isValid = false;
    }
    var numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
    console.log(numberRegex.test(numberInput3.value));
    if (!numberRegex.test(numberInput3.value)) {
        numberInput3.addEventListener("input", () => {
            console.log("object");
            numberInput3.value = numberInput3.value.replace(/[^0-9]/g, "");
        });
        displayErrorMessage3(numberInputBox3, "Please enter your Phone Number");
        isValid = false;
    }
    return isValid;
};
function displayErrorMessage3(inputElement, message) {
    inputElement.style.border = "1px solid red";
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message3";
    errorMessage.textContent = message;
    inputElement.appendChild(errorMessage, inputElement.nextSibling);
}
function clearErrorMessages3() {
    var errorMessages = document.querySelectorAll(".error-message3");
    var inputElement = document.querySelectorAll(".step-1-input-style3");
    errorMessages.forEach((errorMessage) => {
        errorMessage.parentNode.removeChild(errorMessage);
    });
    inputElement.forEach((errorMessage) => {
        errorMessage.style.border = "none";
    });
}
let isHiddenDivOpen = false;
function toggleDiv3() {
    let checkbox = document.getElementById("toggleCheckbox3");
    let hiddenDiv = document.getElementById("hiddenDiv3");
    let openIcon = document.getElementById("open3");
    let closeIcon = document.getElementById("clos3");
    if (checkbox.checked) {
        hiddenDiv.style.display = "block";
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
        isHiddenDivOpen = true;
    } else {
        hiddenDiv.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
        isHiddenDivOpen = false;
    }
}
document.addEventListener("click", function (event) {
    let hiddenDiv = document.getElementById("hiddenDiv3");
    let checkbox = document.getElementById("toggleCheckbox3");
    let openIcon = document.getElementById("open3");
    let closeIcon = document.getElementById("clos3");
    let targetElement = event.target;
    if (isHiddenDivOpen && !hiddenDiv.contains(targetElement)) {
        hiddenDiv.style.display = "none";
        checkbox.checked = false;
        isHiddenDivOpen = false;
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    }
});
document.getElementById("hiddenDiv3").addEventListener("blur", function () {
    let checkbox = document.getElementById("toggleCheckbox3");
    let hiddenDiv = document.getElementById("hiddenDiv3");
    let openIcon = document.getElementById("open3");
    let closeIcon = document.getElementById("clos3");
    if (isHiddenDivOpen) {
        console.log("object");
        console.log(hiddenDiv);
        hiddenDiv.style.display = "none";
        checkbox.checked = false;
        isHiddenDivOpen = false;
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    }
});
function toggleDivCheck3() {
    let checkbox = document.getElementById("toggleCheckbox3");
    let hiddenDiv = document.getElementById("hiddenDiv3");
    let openIcon = document.getElementById("open3");
    let closeIcon = document.getElementById("clos3");
    if (checkbox.checked) {
        checkbox.checked = false;
        hiddenDiv.style.display = "none";
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    } else {
        hiddenDiv.style.display = "block";
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
    }
}
toggleDivCheck3();
toggleDiv3();