document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".waitlist__form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const name = data.name || "misafir";
    alert(
      `Teşekkürler ${name}! Calmcore beta ekibi en kısa sürede ${data.email || "sizinle"} iletişime geçecek. ` +
        "Bu demo formu sunucuya veri göndermez."
    );
    form.reset();
  });
});

