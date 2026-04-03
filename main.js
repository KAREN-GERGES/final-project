

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();  // إصلاح id
    let subject = document.getElementById("subject").value.trim();  // إضافة subject
    let message = document.getElementById("message").value.trim();  // إصلاح id

    // مسح الرسائل السابقة
    document.getElementById("allinput").innerText = "";

    // التحقق من الحقول الفارغة
    if (name === "" || email === "" || subject === "" || message === "") {
        document.getElementById("allinput").innerText = "All fields must be filled out";
        document.getElementById("allinput").style.color = "red";
        return false;
    }

    // التحقق من صحة الإيميل (تحسين)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("allinput").innerText = "Please enter a valid email";
        document.getElementById("allinput").style.color = "red";
        return false;
    }

    // التحقق من طول الرسالة
    if (message.length < 30 || message.length > 300) {
        document.getElementById("allinput").innerText = "Message must be between 30 and 300 characters";
        document.getElementById("allinput").style.color = "red";
        return false;
    }

    // نجح التحقق
    document.getElementById("allinput").innerText = "Form submitted successfully!";
    document.getElementById("allinput").style.color = "green";
    return true;
}