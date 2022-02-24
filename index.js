// get our id's from the document object
let form = document.getElementById("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.querySelector("#submit-form");
let formControl = document.querySelectorAll(".form-control");
let imgError = document.querySelectorAll(".img-error");

// This is the small to display when we the email is empty
let textsmall = document.querySelector(".text-small");
let lastNameSmall = document.querySelector(".last-name-small");
let emailSmall = document.querySelector(".email-small");
let passwordSmall = document.querySelector(".password-small");
let emailSmallEmpty = document.querySelector(".empty-email");

// Submit form section
form.addEventListener("submit", function (e) {
  // first name input
  if (firstName.value === "") {
    textsmall.style.display = "block";
    addError(0);
    addErrorImg(0);
  } else {
    removeElement(textsmall);
    removeError(0);
    removeErrorImg(0);
  }

  // last name input
  // check if the first name is equal to empty
  if (lastName.value === "") {
    lastNameSmall.style.display = "block";
    addError(1);
    addErrorImg(1);
  } else {
    removeElement(lastNameSmall);
    removeError(1);
    removeErrorImg(1);
  }

  //email input
  // if the email value is empty show the small that displays email
  //   cannot be empty
  if (email.value === "") {
    emailSmallEmpty.style.display = "block";
    addError(2);
    addErrorImg(2);
  } else if (!isEmail(email.value)) {
    // this shows the small that says
    // looks like this is not an email
    emailSmall.style.display = "block";

    // remove the second small that says
    // password cannot be empty
    removeElement(emailSmallEmpty);
  } else {
    removeElement(emailSmall);
    removeElement(emailSmallEmpty);
    removeError(2);
    removeErrorImg(2);
  }

  //password input
  // check if the lastname is equal to empty
  if (password.value === "") {
    passwordSmall.style.display = "block";
    addError(3);
    addErrorImg(3);
  } else {
    removeElement(passwordSmall);
    removeError(3);
    removeErrorImg(3);
  }

  e.preventDefault();
});

// function to validate the email
function isEmail(email) {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
    email
  );
}

// This function helps us to hide the errors once there are no longer there
// eg it's not empty anymore
function removeElement(element) {
  return (element.style.display = "none");
}

// function to add error css to our elements
function addError(index) {
  return formControl[index].classList.add("error");
}

// function to remove error css from our elements
function removeError(remove) {
  return formControl[remove].classList.remove("error");
}

// function to add Error image to our inputs
function addErrorImg(errorimg) {
  return (imgError[errorimg].style.display = "block");
}

// function to remove the error image
function removeErrorImg(removeErrorImg) {
  return (imgError[removeErrorImg].style.display = "none");
}
