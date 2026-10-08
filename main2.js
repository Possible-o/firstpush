const login = document.querySelector("#login");
login.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const loginError = document.querySelector("#loginError");

  loginError.textContent = "";
  
  if (!email || !password) {
    // alert("All fields must be filled out");
    loginError.textContent = "All fields must be filled out";
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("User"));

  if (!savedUser){
    // alert("No user found. Please sign up first.");
    loginError.textContent = "No user found. Please sign up first.";
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    // alert('Welcome, ' + savedUser.fullname + '!');
    loginError.textContent = 'Welcome, ' + savedUser.fullname + '!';
    login.reset();
    window.location.href = "home.html";
      // alert("Login successful");
      loginError.textContent = "Login successful";
  }

  else {
    // alert("Invalid email or password");
    loginError.textContent = "Invalid email or password";
    return;
  }


  login.reset();
  window.location.href = "home.html";
});
