
  const sidebarMenu = document.getElementById("sidebar-menu");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const allMenuToggle = document.getElementById("all-menu-toggle");
  const closeSidebar = document.getElementById("close-sidebar");

  allMenuToggle.addEventListener("click", () => {
    sidebarMenu.classList.add("open");
    sidebarOverlay.classList.add("show");
  });

  closeSidebar.addEventListener("click", () => {
    sidebarMenu.classList.remove("open");
    sidebarOverlay.classList.remove("show");
  });

  sidebarOverlay.addEventListener("click", () => {
    sidebarMenu.classList.remove("open");
    sidebarOverlay.classList.remove("show");
  });

// Header slider logic
const headerTrack = document.querySelector('.header-track');
const headerImages = document.querySelectorAll('.header-image');
const headerPrev = document.getElementById('header-prev');
const headerNext = document.getElementById('header-next');

let headerIndex = 0;

function updateHeaderSlider() {
  const width = headerImages[0].clientWidth;
  headerTrack.style.transform = `translateX(-${headerIndex * width}px)`;
}

headerNext.addEventListener('click', () => {
  headerIndex = (headerIndex + 1) % headerImages.length;
  updateHeaderSlider();
});

headerPrev.addEventListener('click', () => {
  headerIndex = (headerIndex - 1 + headerImages.length) % headerImages.length;
  updateHeaderSlider();
});

