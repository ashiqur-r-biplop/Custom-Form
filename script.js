// Get the modal
const modal = document.getElementById("myModal");
const modalContentAnimation = document.getElementById(
  "modal-content-animation"
);

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Get elements from step 1
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const step1RegisterBtn = document.getElementById("step1RegisterBtn");

// Get elements from step 2
const dropdown = document.getElementById("dropdown");
const step2RegisterBtn = document.getElementById("step2RegisterBtn");

// When the user clicks the button, open the modal
btn.onclick = () => {
  modal.style.display = "block";
  modalContentAnimation.style.transform = "translateY(5%)";
  modalContentAnimation.style.transition = "transform 2s";
  // Ensure modal starts from step 1
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  // Clear input fields and error messages
  nameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";
  dropdown.selectedIndex = 0;
  clearErrorMessages();
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Step 1 Register Now button
step1RegisterBtn.onclick = () => {
  if (validateStep1()) {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    clearErrorMessages();
  }
};

// Step 2 Register Now button
step2RegisterBtn.onclick = () => {
  // No need for validation in step 2 for this example
  // Collect data
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;
  const selectedOption = dropdown.value;

  // Post data to API (example)
  const data = {
    name: name,
    email: email,
    number: number,
    option: selectedOption,
  };
  console.log(data);
  // Example of posting data to API (you need to replace this with your actual API endpoint)
  // fetch("https://example.com/api/register", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       modal.style.display = "none"; // Close the modal on successful registration
  //       showSuccessMessage();
  //       console.log("Registration successful");
  //     } else {
  //       console.error("Registration failed");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
};

// Function to validate step 1 inputs
const validateStep1 = () => {
  let isValid = true;
  clearErrorMessages();

  // Validate name input
  if (nameInput.value === "") {
    displayErrorMessage(nameInput, "Please enter your name");
    isValid = false;
  }
  const numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;

  if (!numberRegex.test(numberInput.value)) {
    displayErrorMessage(numberInput, "Please enter your Phone Number");
    isValid = false;
  } 

  // Validate email input
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    displayErrorMessage(emailInput, "Email is not valid");
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
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
};

// Function to clear error messages and reset input borders
const clearErrorMessages = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
  nameInput.style.border = "1px solid #ccc";
  emailInput.style.border = "1px solid #ccc";
  numberInput.style.border = "1px solid #ccc";
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
