const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle menu
menuIcon.onclick = () => {
  navbar.classList.toggle("flex");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("flex-col");
  navbar.classList.toggle("absolute");
  navbar.classList.toggle("top-16");
  navbar.classList.toggle("left-0");
  navbar.classList.toggle("bg-white");
  navbar.classList.toggle("text-black");
  navbar.classList.toggle("w-full");
  navbar.classList.toggle("p-5");

};

// Scroll effect on navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow-md", "text-black");
    header.classList.remove("bg-transparent");
    header.querySelectorAll("a").forEach(link => {
      link.classList.add("text-black");
      link.classList.remove("text-white");
    });
    document.querySelector(".logo i").classList.remove("text-white");
    document.querySelector(".logo i").classList.add("text-red-600");
  } else {
    header.classList.remove("bg-white", "shadow-md");
    header.classList.add("bg-transparent");
    header.querySelectorAll("a").forEach(link => {
      link.classList.add("text-white");
      link.classList.remove("text-black");
    });
    document.querySelector(".logo i").classList.add("text-white");
  }
});