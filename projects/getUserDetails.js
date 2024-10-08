//This JS code will:
// 1. Fetch the user details from the prompts
// 2. Use an object to store the user details
// 3. Validate the user details
// 4. Username must be less than ten
// 5. Password must be greater than 6
// 6. User must confirm the password
// 7. If all the conditions are met, display the user details in the console

// The following details are fetched from the user:
// 1. Username
// 2. Password
// 3. Confirm Password
// 4. Email
// 5. Age
// 6. Phone Number
// 7. Full Name
// 8. Gender

/**************************************************
 * ************************************************
 * ************************************************
Author: Imoleayo Babatunde
Date: 2024-10-08
Title: getUserDetails.js
Description: This script fetches user details from the user and stores it in an object
  * ************************************************
  
************************************************** */


function getUserDetails() {
  function getWithPrompt(data) {
    switch (data) {
      case "username":
        return prompt("Enter your username");
      case "email":
        return prompt("Enter your email address");
      case "age":
        return prompt("Enter your age");
      case "phone":
        return prompt("Enter your phone number");
      case "fullName":
        return prompt("Enter your full name");
      case "password":
        return prompt("Enter your password");
      case "confirmPassword":
        return prompt("Confirm your password");
      default:
        return "Invalid data";
    }
  }

  let username = getWithPrompt("username");
  while (username.length > 10) {
    alert("Username must be less than 10 characters");
    username = getWithPrompt("username");
  }

  let email = getWithPrompt("email");
  while (!email.includes("@")) {
    alert("Invalid email address");
    email = getWithPrompt("email");
  }

  let age = getWithPrompt("age");
  while (isNaN(age)) {
    alert("Invalid age");
    age = getWithPrompt("age");
  }

  let phoneString = getWithPrompt("phone");
  let phone = parseInt(phoneString);

  let fullName = getWithPrompt("fullName");

  let password = getWithPrompt("password");

  let confirmPassword = getWithPrompt("confirmPassword");
  while (password !== confirmPassword) {
    alert("Passwords do not match");
    password = getWithPrompt("password");
    confirmPassword = getWithPrompt("confirmPassword");
  }

//   let gender = (function(){
// let genderData = alert("Plealslel")

//   })();

  let userDetails = {
    username: username,
    password: password,
    age: age,
    fullName: fullName,
    phone: phone,
    email: email,
    // gender: gender
    

  };
return userDetails;
}

console.log(getUserDetails( ))