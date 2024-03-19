function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const textElement = document.getElementById('text');
  const texts = ['Frontend Developer', 'Designer.', 'Blogger.' , 'hacker.' , 'freelancer.'];
  let index = 0;
  let isDeleting = false;
  let speed = 120; // typing speed