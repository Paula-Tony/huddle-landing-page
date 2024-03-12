let emailInput = document.getElementById("email");

document.forms[0].onsubmit = function (e) {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  let warnMsg = document.querySelector(".warn-msg");
  if (regEx.test(emailInput.value)) {
    return true;
  } else {
    emailInput.classList.add("warn");
    warnMsg.style.cssText = "display:block !important";
    return false;
  }
};
