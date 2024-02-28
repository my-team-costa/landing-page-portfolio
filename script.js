const navLinks = document.querySelectorAll(".nav-link, .nav-link-footer");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
