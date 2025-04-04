document.getElementById("showPin").addEventListener("change", function () {
    const pinField = document.getElementById("pin");
    pinField.type = this.checked ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value;
    const pin = document.getElementById("pin").value;

    if ((cardNumber === "1234567890123456" && pin === "1234") ||
        (cardNumber === "9876543210987654" && pin === "4321")) {
        alert("Login Successful!");
        // Example: Redirect to main menu
        // window.location.href = "mainMenu.html";
    } else {
        alert("Invalid Card Number or PIN.");
    }
});
