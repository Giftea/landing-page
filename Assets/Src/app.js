const dom = (selector) => document.getElementById(selector);

function tabToggle(evt, content) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(content).style.display = "block";
  evt.currentTarget.className += " active";
}

dom("toggle-nav").addEventListener("click", () => {
  dom("mobile-nav").classList.add("show");
});

dom("close-nav").addEventListener("click", () => {
  dom("mobile-nav").classList.remove("show");
});

dom("form-btn").addEventListener("click", () => {
  let email = dom("email");
  let helper = dom("helper");

  if (emailValidation(email.value)) {
    helper.style.display = "none";
    email.style.border = " 2px solid #4BB543";
  } else {
    helper.style.display = "block";
    email.style.border = " 2px solid hsl(0, 94%, 66%)";
  }
});

dom("newsLetter").addEventListener("submit", (e) => {
  e.preventDefault();
});

function emailValidation(value) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}
