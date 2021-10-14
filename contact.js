//Phone Number Validation
var phone = document.getElementById("phone");
var phoneFormact = /^\d{11}$/g;
phone.onkeyup = function () {
  if (phone.value.match(phoneFormact)) {
    document.getElementById("phone-length").style.display = "none";
  } else {
    document.getElementById("phone-length").style.display = "block";
  }
};

//Mail Validation
var mail = document.getElementById("mail");
var mailFormact =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

mail.onkeyup = function () {
  if (mail.value.match(mailFormact)) {
    document.getElementById("valid-mail").style.display = "none";
  } else {
    document.getElementById("valid-mail").style.display = "block";
  }
};

var retypemail = document.getElementById("retype-mail");
var checkedmail = document.getElementById("checked-mail");

confirm_email.onkeyup = function () {
  if (mail.value !== confirm_email.value) {
    checkedmail.style.display = "block";
  } else if (mail.value == confirm_email.value) {
    checkedmail.style.display = "none";
  }
};

//ShowHide Function
function ShowHideDiv() {
  var selectedValue = document.getElementById("contact_type").value;
  var Level_box = document.getElementById("level-box");
  if (selectedValue == "新しいクラスの情報") {
    Level_box.style.display = "block";
  } else {
    Level_box.style.display = "none";
  }
}

//Submit Function
var contactForm = document.getElementById("contact_form");
contactForm.addEventListener("submit", onsubmit);
function onsubmit(e) {
  e.preventDefault();
  var firstName = document.getElementById("name-1").value;
  var lastName = document.getElementById("name-2").value;
  var gender1 = document.getElementById("gender-1");
  var gender2 = document.getElementById("gender-2");
  var address1 = document.getElementById("address-1").value;
  var address2 = document.getElementById("address-2").value;
  var addressText = document.getElementById("address-text").value;
  var phoneNumber = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var confirmEmail = document.getElementById("confirm_email").value;
  var checkedEmail = document.getElementById("checked-email");
  var level_boxText = document.getElementById("level-text").value;
  var output_levelWarp = document.getElementById("output-level_warp");
  var contact_contentText = document.getElementById("contact-content").value;
  var checkbox = document.getElementById("student");

  //To get Name
  if ((firstName, lastName === "")) {
    window.alert("お名前を入れてください。");
    return false;
  } else {
    document.getElementById("output-name").innerHTML =
      firstName + " " + lastName;
  }

  //To get Gender
  if (gender1.checked == true) {
    document.getElementById("output-gender").innerHTML = "男性";
  } else {
    document.getElementById("output-gender").innerHTML = "女性";
  }

  //To get Address
  document.getElementById("output-address").innerHTML =
    "〒" + address1 + " －" + address2 + addressText;

  //To get Phone Number
  if (phoneNumber === "") {
    window.alert("電話番号を入れてください。");
    return false;
  } else {
    document.getElementById("output-phone").innerHTML = phoneNumber;
  }

  //To get Email
  if (mail !== confirmEmail) {
    checkedEmail.style.display = "block";
    return false;
  }
  if (mail === "") {
    window.alert("メールアドレスを入れてください。");
    return false;
  } else {
    document.getElementById("output-mail").innerHTML = mail;
    document.getElementById("output-confirm_email").innerHTML = confirmEmail;
  }

  //To get Contact Type
  if (document.getElementById("contact_type").value == "勉強会について") {
    document.getElementById("output-contact-type").innerHTML = "勉強会について";
  }

  if (
    document.getElementById("contact_type").value == "レクチャー用の書類提出"
  ) {
    document.getElementById("output-contact-type").innerHTML =
      "レクチャー用の書類提出";
  }

  if (document.getElementById("contact_type").value == "新しいクラスの情報") {
    document.getElementById("output-contact-type").innerHTML =
      "新しいクラスの情報";
  }

  if (
    document.getElementById("contact_type").value == "個人プロジェクトの窓口"
  ) {
    document.getElementById("output-contact-type").innerHTML =
      "個人プロジェクトの窓口";
  }

  if (
    document.getElementById("contact_type").value ==
    "定例ミーティングの欠席に関する連絡"
  ) {
    document.getElementById("output-contact-type").innerHTML =
      "定例ミーティングの欠席に関する連絡";
  }

  if (document.getElementById("contact_type").value == "それぞれのご意見") {
    document.getElementById("output-contact-type").innerHTML =
      "それぞれのご意見";
  }

  //To get Level Box
  if (
    level_boxText === "" &&
    document.getElementById("contact_type").value == "新しいクラスの情報"
  ) {
    window.alert("レベルと資格を入れてください。");
    return false;
  }
  if (document.getElementById("contact_type").value != "新しいクラスの情報") {
    document.getElementById("output-level-wrap").style.display = "none";
  } else {
    document.getElementById("output-level-wrap").style.display = "block";
    document.getElementById("output-level").innerHTML = level_boxText;
  }

  //To get Contact Content
  document.getElementById("output-contact-content").innerHTML =
    contact_contentText;

  //To get Checkbox
  if (checkbox.checked == true) {
    document.getElementById("output-student").innerHTML = "true";
  } else {
    document.getElementById("output-student").innerHTML = "false";
  }

  var contact_dataInput, contact_dataOutput;
  contact_dataInput = document.getElementById("contact-data-input");
  contact_dataOutput = document.getElementById("contact-data-output");

  if (contact_dataOutput.style.display === "none") {
    contact_dataOutput.style.display = "block";
    contact_dataInput.style.display = "none";
  }
}
