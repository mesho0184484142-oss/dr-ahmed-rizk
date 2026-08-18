/* =========================================
   ملف الجافاسكريبت الرئيسي (main.js)
   تم التحديث: تحسين التحقق من البيانات (Validation) والتفاعل (Interactivity)
========================================= */

function sendVerificationCode() {
    // 1. جلب العناصر من الواجهة وتخزينها في متغيرات (لتحسين أداء الكود)
    const nationalIdInput = document.getElementById('nationalId');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const verificationSection = document.getElementById('verificationSection');
    const verificationCodeInput = document.getElementById('verificationCode');
    
    // تحديد زر الإرسال (لعمل تأثير التحميل)
    const submitBtn = event ? event.target : document.querySelector('button[onclick="sendVerificationCode()"]');

    // تنظيف القيم من المسافات الزائدة (Trim)
    const nationalId = nationalIdInput.value.trim();
    const password = passwordInput.value;
    const email = emailInput.value.trim();

    // 2. التحقق من الرقم القومي (يجب أن يكون 14 رقماً بالضبط)
    const nationalIdRegex = /^\d{14}$/;
    if (!nationalIdRegex.test(nationalId)) {
        alert("⚠️ خطأ: يجب أن يتكون الرقم القومي من 14 رقماً بالضبط وبدون حروف!");
        nationalIdInput.focus();
        return;
    }

    // 3. التحقق من قوة الرقم السري (6 عناصر أو أكثر)
    if (password.length < 6) {
        alert("⚠️ خطأ: يرجى كتابة رقم سري قوي (6 عناصر أو أكثر) لضمان أمان حسابك!");
        passwordInput.focus();
        return;
    }

    // 4. التحقق من البريد الإلكتروني (يجب أن يكون بصيغة إيميل صحيحة)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ خطأ: يرجى إدخال بريد إلكتروني صالح (مثال: student@gmail.com)!");
        emailInput.focus();
        return;
    }

    // 5. تأثير بصري للزر أثناء المعالجة (UX Enhancement)
    let originalBtnText = "إرسال الكود";
    if (submitBtn) {
        originalBtnText = submitBtn.innerText;
        submitBtn.innerText = "⏳ جاري إرسال الكود...";
        submitBtn.disabled = true;
    }

    // 6. محاكاة المعالجة أو الربط (تأخير ثانية واحدة ليعطي انطباعاً واقعياً بالتحميل)
    setTimeout(() => {
        alert(`✅ كل البيانات سليمة! تم إرسال كود التفعيل بنجاح إلى: ${email}`);
        
        // إظهار قسم كود التفعيل
        verificationSection.style.display = 'block';
        
        // التركيز التلقائي على خانة الكود لتسهيل الكتابة على المستخدم
        if (verificationCodeInput) {
            verificationCodeInput.focus();
        }

        // إرجاع الزر لحالته الأصلية
        if (submitBtn) {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    }, 1000);
}
