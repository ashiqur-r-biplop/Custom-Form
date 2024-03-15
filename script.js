var modal = document.getElementById("myModal");
var modalContentAnimation = document.getElementById("modal-content-animation");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var numberInput = document.getElementById("numberInput");
var step1RegisterBtn = document.getElementById("step1RegisterBtn");
var emailInputBox = document.getElementById("emailInput-box");
var nameInputBox = document.getElementById("nameInput-box");
var numberInputBox = document.getElementById("numberInput-box");
var dropdown = document.getElementById("dropdown");
var step2RegisterBtn = document.getElementById("step2RegisterBtn");
btn.onclick = function () {
  modal.style.display = "block";
  modalContentAnimation.style.transform = "translateY(5%)";
  modalContentAnimation.style.transition = "transform 2s";
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  dropdown.selectedIndex = 0;
  clearErrorMessages();
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
step1RegisterBtn.onclick = function () {
  if (validateStep1()) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    clearErrorMessages();
  }
};
step2RegisterBtn.onclick = function () {
  var name = nameInput.value;
  var email = emailInput.value;
  var number = numberInput.value;
  var selectedOption = dropdown.value;
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
        modal.style.display = "none";
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
var validateStep1 = function () {
  let isValid = true;
  clearErrorMessages();
  if (nameInput.value === "") {
    displayErrorMessage(nameInputBox, "Please enter your name");
    isValid = false;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    displayErrorMessage(emailInputBox, "Email is not valid");
    isValid = false;
  }
  var numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
  console.log(numberRegex.test(numberInput.value));
  if (!numberRegex.test(numberInput.value)) {
    numberInput.addEventListener("input", () => {
      console.log("object");
      numberInput.value = numberInput.value.replace(/[^0-9]/g, "");
    });
    displayErrorMessage(numberInputBox, "Please enter your Phone Number");
    isValid = false;
  }
  return isValid;
};
function displayErrorMessage(inputElement, message) {
  inputElement.style.border = "1px solid red";
  var errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;
  inputElement.appendChild(errorMessage, inputElement.nextSibling);
}
function clearErrorMessages() {
  var errorMessages = document.querySelectorAll(".error-message");
  var inputElement = document.querySelectorAll(".step-1-input-style");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
  inputElement.forEach((errorMessage) => {
    errorMessage.style.border = "none";
  });
}
let isHiddenDivOpen = false;
function toggleDiv() {
  let checkbox = document.getElementById("toggleCheckbox");
  let hiddenDiv = document.getElementById("hiddenDiv");
  let openIcon = document.getElementById("open");
  let closeIcon = document.getElementById("clos");
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
  let hiddenDiv = document.getElementById("hiddenDiv");
  let checkbox = document.getElementById("toggleCheckbox");
  let openIcon = document.getElementById("open");
  let closeIcon = document.getElementById("clos");
  let targetElement = event.target;
  if (isHiddenDivOpen && !hiddenDiv.contains(targetElement)) {
    hiddenDiv.style.display = "none";
    checkbox.checked = false;
    isHiddenDivOpen = false;
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  }
});
document.getElementById("hiddenDiv").addEventListener("blur", function () {
  let checkbox = document.getElementById("toggleCheckbox");
  let hiddenDiv = document.getElementById("hiddenDiv");
  let openIcon = document.getElementById("open");
  let closeIcon = document.getElementById("clos");
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
function toggleDivCheck() {
  let checkbox = document.getElementById("toggleCheckbox");
  let hiddenDiv = document.getElementById("hiddenDiv");
  let openIcon = document.getElementById("open");
  let closeIcon = document.getElementById("clos");
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
toggleDivCheck();
toggleDiv();
