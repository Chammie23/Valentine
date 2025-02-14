let password = "";  // Lưu mật khẩu nhập vào
const correctPassword = "221224"; // Đổi thành ngày mong muốn

function enterDigit(digit) {
    if (password.length < 6) {
        password += digit;
        document.getElementById("passwordInput").value = "*".repeat(password.length);
    }
}

function clearInput() {
    password = "";
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    if (password === correctPassword) {
        alert("Happy Valentine's Day Anhcuabe ❤️");
        // Chuyển hướng đến trang bất ngờ
        window.location.href = "surprise.html";
    } else {
        alert("Wrong Code! Try again.");
        clearInput();
    }
}