const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const channel = document.getElementById("channel").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`QBH Media Inquiry - ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nYouTube Channel: ${channel || "Not provided"}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:qbh313official@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Your email app should open with the inquiry prepared.";
});
