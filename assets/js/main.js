// assets/js/main.js

function sendVerificationCode() {
    // جلب القيم من الخانات
    const nationalId = document.getElementById('nationalId').value.trim();
    const password = document.getElementById('password').value;
    const emailInput = document.getElementById('email').value.trim();

    // 1. التحقق من الرقم القومي (يجب أن يكون 14 رقم بالضبط ومكون من أرقام فقط)
    const nationalIdRegex = /^\d{14}$/;
    if (!nationalIdRegex.test(nationalId)) {
        alert("خطأ: يجب أن يتكون الرقم القومي من 14 رقم بالضبط وبدون حروف!");
        document.getElementById('nationalId').focus();
        return;
    }

    // 2. التحقق من قوة الرقم السري (على الأقل 6 عناصر)
    if (password.length < 6) {
        alert("خطأ: يجب أن يكون الرقم السري 6 عناصر أو أكثر لضمان أمان حسابك!");
        document.getElementById('password').focus();
        return;
    }

    // 3. التحقق من البريد الإلكتروني
    if (emailInput === '') {
        alert("يرجى إدخال البريد الإلكتروني أولاً.");
        document.getElementById('email').focus();
        return;
    }
    
    // إذا كانت كل البيانات سليمة:
    alert("كل البيانات سليمة! تم إرسال كود التفعيل بنجاح إلى: " + emailInput);
    
    // إظهار قسم كود التفعيل
    const verificationSection = document.getElementById('verificationSection');
    verificationSection.style.display = 'block';
    document.getElementById('verificationCode').focus();
}