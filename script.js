
  function teacherVal() {
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let pwdk = document.getElementById("pwd").value; //pwd
  let pwdCC = document.getElementById("pwdC").value; //pwdC
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  let rem =users.length && JSON.parse(localStorage.getItem("users")).some( (e) => e.email.toLowerCase() == email.toLowerCase() );   
  if (fname != "" && email != "" && pwdk != "") {
    if (pwdk === pwdCC) {
      var user = { email: email, pass: pwdk, username: fname, };
      if (!rem) {
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        console.log("user added");
        window.location.href = "login.html";
      } else {
        alert("Alert: Email already registered please signin !!");
      }
    } else {
      alert("Error: Password incorrect !!");
    }
  } else {
    alert("Alert: Please Enter all data !!");
  }
}
function teacherInfo() {
  let email = document.getElementById("lEmail").value; 
  pwd = document.getElementById("lPwd").value; 
  let jsonLocal = JSON.parse(localStorage.getItem("users")) || [];
  var currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  if (email != "" && pwd != "") {
    let rem =jsonLocal.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (e) => e.email.toLowerCase() == email && e.pass == pwd 
    );
    if (!rem) {
      alert("Error: Incorrect login information.");
    } else {
      let e = JSON.parse(localStorage.getItem("users"));
      let crntUsrData = e.find((ee) => ee.email === email);
      let token = generateToken();
      let User = { email: crntUsrData.email, pass: pwd, username: crntUsrData.username, token: token, };
      currentUser.push(User);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "dashboard.html";
    }
  } else {
    alert("Error: Please Enter Required Information.");
  }
}

//new generaterToken done till 
function generateToken() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let no = "0123456789";
  let char = "!@#$%^&*()_+";

  let funX = upperCase + lowerCase + no + char;

  let loop = "";
  for (let i = 0; i < 12; i++) {
    let funC= Math.floor(Math.random() * funX.length);
    loop = loop + funX[funC];
  }
  return loop;
}

// for message about the entered information
let wel = document.getElementById("welcom1");
function displayinfo(name, email) { wel.innerHTML = `<p>Welcome Back ${name}</p> <p>Your Email ID : ${email}</p>`;}