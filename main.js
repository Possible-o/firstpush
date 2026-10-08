const signup = document.querySelector("#signup");
signup.addEventListener("submit",(event)=> {
    event.preventDefault();
    const fullname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const error = document.querySelector("#error")

    error.textContent = ""
    error.style.color = "red"
    error.style.fontSize = "15px"
    // error.style.backgroundColor = "green"

    if(!fullname || !email || !password || !confirmPassword) {
        // alert("All fields must be filled out");
        error.textContent= "All field must be filled out"
        return;
    }

    if (password.length < 5 || password !== confirmPassword) {
        // alert("check your password")
        error.textContent= "Check your password"
        error.style.color = "blue"
        return;
    }

    const user = {
        fullname: fullname,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }

    localStorage.setItem("User", JSON.stringify(user));
    // alert("Account created successfully");
    error.textContent = "Account created successfully";

    signup.reset()
    window.location.href = "login.html";
});
