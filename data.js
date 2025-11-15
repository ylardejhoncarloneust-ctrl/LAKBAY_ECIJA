// LOG IN AND REGISTER
let email = document.getElementById("logemail");
let pass = document.getElementById("logpassword");
let usernameValue, emailValue, passwordValue, confpasswordValue;
const logForm = document.getElementById("logform");
const regForm = document.getElementById("regform");

document.addEventListener("DOMContentLoaded", function() {
  
  if (regForm) {
    regForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let usernameValue = document.getElementById("username").value;
      let emailValue = document.getElementById("email").value;
      let passwordValue = document.getElementById("password").value;
      let confpasswordValue = document.getElementById("confpassword").value;
        
      if (passwordValue !== confpasswordValue) {
        alert("Passwords do not match!");
        return;
      }

      localStorage.setItem("regusername", usernameValue);  
      localStorage.setItem("regemail", emailValue);  
      localStorage.setItem("regpassword", passwordValue); 

      window.location.href = "Login.html";
    });
  }


  
  if (logForm) {
    logForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let storedEmail = localStorage.getItem("regemail");
      let storedPass = localStorage.getItem("regpassword");
      let logemailVal = document.getElementById("logemail").value;
      let logpassVal = document.getElementById("logpassword").value;

      if (logemailVal !== storedEmail || logpassVal !== storedPass) {
        alert("Email or Password do not match!");
        return;
      }
      window.location.href = "HomePage.html";
    });
  }

});

//CHECK IN CHECK OUT DATE PACKAGE

function autodate() {
	
    let nights = 2; 
    let checkin = document.getElementById("checkIn").value;
    let checkinDate = new Date(checkin); 

    checkinDate.setDate(checkinDate.getDate() + nights);

    document.getElementById("checkOut").value = checkinDate.toISOString().slice(0, 10);
}
