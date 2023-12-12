const generateButton = document.getElementById("generateButton");
const otpDisplay = document.getElementById("otpDisplay");

generateButton.addEventListener("click", generateOTP);

function generateOTP() {
const length = 6; // Length of the OTP
const characters = "0123456789"; // Characters used for the OTP

let otp = "";
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
otp += characters.charAt(randomIndex);
}

otpDisplay.textContent = `Generated OTP: ${otp}`;
}