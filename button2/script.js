var modal2 = document.getElementById("myModal2");
var modalContentAnimation2 = document.getElementById("modal-content-animation2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = document.getElementsByClassName("close2")[0];
var nameInput2 = document.getElementById("nameInput2");
var emailInput2 = document.getElementById("emailInput2");
var numberInput2 = document.getElementById("numberInput2");
var step1RegisterBtn2 = document.getElementById("step1RegisterBtn2");
var emailInputBox2 = document.getElementById("emailInput-box2");
var nameInputBox2 = document.getElementById("nameInput-box2");
var numberInputBox2 = document.getElementById("numberInput-box2");
var dropdown2 = document.getElementById("dropdown2");
var step2RegisterBtn2 = document.getElementById("step2RegisterBtn2");
btn2.onclick = function () {
  modal2.style.display = "block";
  modalContentAnimation2.style.transform = "translateY(5%)";
  modalContentAnimation2.style.transition = "transform 2s";
  document.getElementById("step12").style.display = "block";
  document.getElementById("step22").style.display = "none";
  nameInput2.value = "";
  emailInput2.value = "";
  numberInput2.value = "";
  dropdown2.selectedIndex = 0;
  clearErrorMessages2();
};
span2.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
step1RegisterBtn2.onclick = function () {
  if (validateStep12()) {
    document.getElementById("step12").style.display = "none";
    document.getElementById("step22").style.display = "block";
    clearErrorMessages2();
  }
};
step2RegisterBtn2.onclick = function () {
  var name = nameInput2.value;
  var email = emailInput2.value;
  var number = numberInput2.value;
  var selectedOption = dropdown2.value;
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
        modal2.style.display = "none";
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
var validateStep12 = function () {
  let isValid = true;
  clearErrorMessages2();
  if (nameInput2.value === "") {
    displayErrorMessage2(nameInputBox2, "Please enter your name");
    isValid = false;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput2.value)) {
    displayErrorMessage2(emailInputBox2, "Email is not valid");
    isValid = false;
  }
  var numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
  console.log(numberRegex.test(numberInput2.value));
  if (!numberRegex.test(numberInput2.value)) {
    numberInput2.addEventListener("input", () => {
      console.log("object");
      numberInput2.value = numberInput2.value.replace(/[^0-9]/g, "");
    });
    displayErrorMessage2(numberInputBox2, "Please enter your Phone Number");
    isValid = false;
  }
  return isValid;
};
function displayErrorMessage2(inputElement, message) {
  inputElement.style.border = "1px solid red";
  var errorMessage = document.createElement("div");
  errorMessage.className = "error-message2";
  errorMessage.textContent = message;
  inputElement.appendChild(errorMessage, inputElement.nextSibling);
}
function clearErrorMessages2() {
  var errorMessages = document.querySelectorAll(".error-message2");
  var inputElement = document.querySelectorAll(".step-1-input-style2");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
  inputElement.forEach((errorMessage) => {
    errorMessage.style.border = "none";
  });
}
let isHiddenDivOpen = false;
function toggleDiv2() {
  let checkbox = document.getElementById("toggleCheckbox2");
  let hiddenDiv = document.getElementById("hiddenDiv2");
  let openIcon = document.getElementById("open2");
  let closeIcon = document.getElementById("clos2");
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
  let hiddenDiv = document.getElementById("hiddenDiv2");
  let checkbox = document.getElementById("toggleCheckbox2");
  let openIcon = document.getElementById("open2");
  let closeIcon = document.getElementById("clos2");
  let targetElement = event.target;
  if (isHiddenDivOpen && !hiddenDiv.contains(targetElement)) {
    hiddenDiv.style.display = "none";
    checkbox.checked = false;
    isHiddenDivOpen = false;
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  }
});
document.getElementById("hiddenDiv2").addEventListener("blur", function () {
  let checkbox = document.getElementById("toggleCheckbox2");
  let hiddenDiv = document.getElementById("hiddenDiv2");
  let openIcon = document.getElementById("open2");
  let closeIcon = document.getElementById("clos2");
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
function toggleDivCheck2() {
  let checkbox = document.getElementById("toggleCheckbox2");
  let hiddenDiv = document.getElementById("hiddenDiv2");
  let openIcon = document.getElementById("open2");
  let closeIcon = document.getElementById("clos2");
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
toggleDivCheck2();
toggleDiv2();
