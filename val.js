
let wel = document.getElementById("welcom1");
let mainInfo = JSON.parse(localStorage.getItem("users"));
let dataCurr = JSON.parse(localStorage.getItem("currentUser"));
let nCurr = dataCurr[0].username;
let email = dataCurr[0].email;
displayinfo(nCurr, email);

// 
function teacherUpdate() {

  var pwd = document.getElementById("pwd").value;
  let pwdN = document.getElementById("pwdN").value;
  let pwdC = document.getElementById("pwdC").value;

  let validation =
  mainInfo.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (data) => data.email.toLowerCase() == email && data.pass == pwd
    );
  console.log(validation);

  if (!validation) {
    alert("Error: Incorrect password !!");
  } else {
    if (pwdN == pwdC) {

      usrIndex = mainInfo.findIndex((obj) => obj.pass == pwd);     
      mainInfo[usrIndex].pass = pwdC;
      console.log(mainInfo);
      localStorage.setItem("users", JSON.stringify(mainInfo));

      crntUsrIndex = dataCurr.findIndex((obj) => obj.pass == pwd);     
      dataCurr[usrIndex].pass = pwdC;
      alert("Too Stronge Password updated.")
      console.log(dataCurr);
      localStorage.setItem("users", JSON.stringify(dataCurr));
      
    }
  }
}


function teacherExit() {
  window.location.href = "./index.html";
  localStorage.removeItem("currentUser");
}

function displayinfo(name, email) {
  console.log(name, email);
  wel.innerHTML = `<p>Welcome Back: ${name}</p> <p>Your Email-ID: ${email}</p>`;
}