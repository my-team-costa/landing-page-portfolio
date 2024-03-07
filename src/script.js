//MENU NAVEGATION
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

//DARK-MODE
function toggleDarkMode() {
  const portal = document.getElementById("portal");
  const profileImage = document.getElementById("profileImage");
  const darkModeButton = document.getElementById("darkModeButton");
  const backgroundComment = document.getElementById("background-comment");
  const zigZag = document.getElementById("zig-zag");
  const zigZagSmall = document.getElementById("zig-zag-small");

  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  updateTheme(
    isDarkMode,
    portal,
    profileImage,
    darkModeButton,
    backgroundComment,
    zigZag,
    zigZagSmall
  );

  toggleSocialMediaImages();
}

function toggleSocialMediaImages() {
  const images = document.querySelectorAll(".icons-media img");
  images.forEach((img) => {
    let src = img.getAttribute("src");
    if (src.includes("/light-mode/")) {
      src = src.replace("/light-mode/", "/dark-mode/");
    } else if (src.includes("/dark-mode/")) {
      src = src.replace("/dark-mode/", "/light-mode/");
    }
    img.setAttribute("src", src);
  });
}

function updateTheme(
  isDarkMode,
  portal,
  profileImage,
  darkModeButton,
  backgroundComment,
  zigZag,
  zigZagSmall
) {
  if (isDarkMode) {
    zigZag.src = "src/assets/img/Zig Zag white.png";
    zigZagSmall.src = "src/assets/img/Zig Zag small white.png";
    backgroundComment.src = "src/assets/img/background-comment-dark-mode.png";
    portal.src = "src/assets/img/Portal-white.svg";
    profileImage.src = "src/assets/img/Logo-white.png";
    darkModeButton.innerText = "Contact Me";
    removeImagesOnDarkMode();
  } else {
    zigZag.src = "src/assets/img/Zig Zag.png";
    zigZagSmall.src = "src/assets/img/Zig Zag small.png";
    backgroundComment.src = "src/assets/img/background-comment.png";
    portal.src = "src/assets/img/Portal.png";
    profileImage.src = "src/assets/img/Logo.png";
    darkModeButton.innerText = "Button";
  }

  const dawnImages = document.querySelectorAll(".dawn");
  dawnImages.forEach((img) => {
    if (isDarkMode) {
      img.src = "src/assets/img/Dawn-dark-mode.svg";
    } else {
      img.src = "src/assets/img/Dawn.png";
    }
  });
}

function removeImagesOnDarkMode() {
  const dawnWhiteImage = document.getElementById("dawn-white");
  const warmImage = document.getElementById("warm");
  dawnWhiteImage.style.display = "none";
  warmImage.style.display = "none";
}

(function () {
  document
    .getElementById("toggleContainer")
    .addEventListener("click", function () {
      toggleDarkMode();
    });

  document
    .getElementById("darkModeButton")
    .addEventListener("click", function () {
      if (!document.body.classList.contains("dark-mode")) {
        toggleDarkMode();
      }
    });
})();

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");

  menuIcon.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
