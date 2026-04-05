const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

if (signupForm && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const ageGroup = String(formData.get("ageGroup") || "").trim();
    const courseType = String(formData.get("courseType") || "").trim();
    const phoneOk = /^1\d{10}$/.test(phone);

    if (!name || !phone || !ageGroup || !courseType) {
      formMessage.textContent = "请先完整填写报名信息。";
      return;
    }

    if (!phoneOk) {
      formMessage.textContent = "请输入有效的 11 位手机号码。";
      return;
    }

    formMessage.textContent = `${name}，报名信息已提交，我们会尽快联系你。`;
    signupForm.reset();
  });
}
