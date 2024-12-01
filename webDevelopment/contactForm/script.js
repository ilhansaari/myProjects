const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const textInput = document.getElementById("text");
const submitButton = document.querySelector(".submitBtn");
const senditMessage = document.getElementById("sendit");

submitButton.addEventListener("click", function () {

  const nameValue = nameInput.value.trim();
  const surnameValue = surnameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const textValue = textInput.value.trim();

  if (nameValue && surnameValue && emailValue && textValue) {

    senditMessage.textContent = `${nameValue} ${surnameValue}, your message has been sent.`; 
  } else {
    alert("Please fill in all areas!");
  }
});