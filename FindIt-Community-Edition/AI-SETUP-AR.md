# تشغيل مساعد FindIt الحقيقي

## 1. المطلوب
- Node.js 18 أو أحدث (عندك Node 22).
- مفتاح OpenAI API صالح وحساب API عليه رصيد/فواتير مفعلة. API منفصل عن اشتراك ChatGPT.
- لا تضعي المفتاح في HTML أو JavaScript داخل public أو في GitHub.

## 2. افتحي فولدر المشروع الداخلي في VS Code
لازم يظهر فيه package.json.

## 3. في PowerShell Terminal
```powershell
$env:OPENAI_API_KEY = Read-Host "Paste your OpenAI API key"
$env:PORT=3002; npm.cmd start
```
أدخلي المفتاح في Terminal فقط. Read-Host هنا لا يخفي الأحرف أثناء الإدخال، لذا تجنبي مشاركة الشاشة وقتها.

## 4. جربي
افتحي http://localhost:3002 ثم افتحي مساعد FindIt من الزر الجانبي.
اكتبي: I lost a black bag, can you help me?
وجربي سؤالًا بالعربية والتركية.

## ملاحظات
- لو ظهر EADDRINUSE اختاري منفذًا فاضيًا مثل 3003، ثم افتحي localhost:3003.
- لو ظهر AI is not configured أعيدي تشغيل السيرفر في نفس Terminal التي ضبطتي فيها المفتاح.
- لو ظهر billing issue راجعي إعدادات حساب OpenAI API.
- الشات يرسل آخر 8 رسائل وسجلات عامة مختصرة من البلاغات إلى API، ولا يرسل بيانات حسابات العملاء.
- في هذه النسخة حد محلي بسيط 12 رسالة لكل 10 دقائق لكل عنوان اتصال، مناسب للتجربة فقط وليس حماية كافية للنشر العام.
- لا تحتاجين Firebase أو Supabase لتجربة المساعد.
