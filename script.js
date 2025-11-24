document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    alert(
      `Teşekkürler ${data["Adınız"] || data[Object.keys(data)[0]] || "misafir"}! ` +
        "Mesajınızı aldık. Bu demo form ağ bağlantısı kurmaz."
    );
    form.reset();
  });
});

