const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

if (signupForm && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const profile = String(formData.get("ageGroup") || "").trim();
    const interest = String(formData.get("courseType") || "").trim();

    if (!name || !phone || !profile || !interest) {
      formMessage.textContent = "Por favor, completa todos los campos obligatorios.";
      return;
    }

    if (phone.replace(/\s+/g, "").length < 8) {
      formMessage.textContent = "Introduce un teléfono válido para que podamos contactarte.";
      return;
    }

    formMessage.textContent = `${name}, hemos recibido tu solicitud. Te contactaremos pronto.`;
    signupForm.reset();
  });
}
