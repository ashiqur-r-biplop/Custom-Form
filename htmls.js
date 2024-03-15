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

toggleDiv()
toggleDivCheck()