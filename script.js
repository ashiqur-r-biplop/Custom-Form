const modal = document.getElementById("myModal");
const modalContentAnimation = document.getElementById(
  "modal-content-animation"
);
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const step1RegisterBtn = document.getElementById("step1RegisterBtn");
const emailInputBox = document.getElementById("emailInput-box");
const nameInputBox = document.getElementById("nameInput-box");
const numberInputBox = document.getElementById("numberInput-box");
const dropdown = document.getElementById("dropdown");
const step2RegisterBtn = document.getElementById("step2RegisterBtn");
btn.onclick = () => {
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

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

step1RegisterBtn.onclick = () => {
  if (validateStep1()) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    clearErrorMessages();
  }
};

step2RegisterBtn.onclick = () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;
  const selectedOption = dropdown.value;

  const data = {
    name: name,
    email: email,
    number: `+61 ${number}`,
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

const validateStep1 = () => {
  let isValid = true;
  clearErrorMessages();

  if (nameInput.value === "") {
    displayErrorMessage(nameInputBox, "Please enter your name");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    displayErrorMessage(emailInputBox, "Email is not valid");
    isValid = false;
  }
  const numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
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

const displayErrorMessage = (inputElement, message) => {
  inputElement.style.border = "1px solid red";
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;
  inputElement.appendChild(errorMessage, inputElement.nextSibling);
};

const clearErrorMessages = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  const inputElement = document.querySelectorAll(".step-1-input-style");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
  inputElement.forEach((errorMessage) => {
    errorMessage.style.border = "none";
  });
};
let isHiddenDivOpen = false;

const toggleDiv = () => {
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
};

const toggleDivCheck = () => {
  let checkbox = document.getElementById("toggleCheckbox");
  let hiddenDiv = document.getElementById("hiddenDiv");
  if (checkbox.checked) {
    checkbox.checked = false;
    hiddenDiv.style.display = "none";
  } else {
    hiddenDiv.style.display = "block";
  }
};

document.addEventListener("click", (event) => {
  let hiddenDiv = document.getElementById("hiddenDiv");
  let checkbox = document.getElementById("toggleCheckbox");
  let targetElement = event.target;

  if (isHiddenDivOpen && !hiddenDiv.contains(targetElement)) {
    hiddenDiv.style.display = "none";
    checkbox.checked = false;
    isHiddenDivOpen = false;
  }
});

document.getElementById("hiddenDiv").addEventListener("blur", () => {
  if (isHiddenDivOpen) {
    console.log("object");
    let checkbox = document.getElementById("toggleCheckbox");
    let hiddenDiv = document.getElementById("hiddenDiv");
    console.log(hiddenDiv);
    hiddenDiv.style.display = "none";
    checkbox.checked = false;
    isHiddenDivOpen = false;
  }
});

toggleDivCheck();
toggleDiv();
