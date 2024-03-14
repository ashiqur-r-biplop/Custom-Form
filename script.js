// Get the modal
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
  console.log(data);
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

// Function to validate step 1 inputs
const validateStep1 = () => {
  let isValid = true;
  clearErrorMessages();

  // Validate name input
  if (nameInput.value === "") {
    displayErrorMessage(nameInputBox, "Please enter your name");
    isValid = false;
  }

  // Validate email input
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

// Function to display error messages
const displayErrorMessage = (inputElement, message) => {
  inputElement.style.border = "1px solid red";
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;
  inputElement.appendChild(errorMessage, inputElement.nextSibling);
};

// Function to clear error messages and reset input borders
const clearErrorMessages = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
};

// Function to display success message for 2 seconds
const showSuccessMessage = () => {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Registration successful";
  successMessage.className = "success-message";
  document.body.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);
};
//  check valid
// JavaScript
