const navItem = document.querySelectorAll("#nav");

const pathname = window.location.pathname;

navItem.forEach((i) => {
  if (pathname.includes(i.textContent.trim().toLowerCase())) {
    i.style.fontWeight = "600";
  }
});

// Burger Menu Section
const burgerIcon = document.getElementById("burger_menu");
const drawerMenuContainer = document.getElementById("drawer_menu_container");
const includeAnimation = document.querySelectorAll(".drawer_items a");

// Open Drawer Menu
burgerIcon.addEventListener("click", openMenu);

function openMenu() {
  includeAnimation.forEach((element) => {
    element.classList.add("show_fade_animate");
  });
  drawerMenuContainer.style.transform = "translateX(0)";
}

// Close Drawer Menu
const closeDrawerMenuIcon = document.getElementById("close_drawer_menu");
closeDrawerMenuIcon.addEventListener("click", closeMenu);

function closeMenu() {
  includeAnimation.forEach((element) => {
    element.classList.remove("show_fade_animate");
  });
  drawerMenuContainer.style.transform = "translateX(100%)";
}

// *************** Tabs Section *****************
const tab = document.querySelector(".tabs_container");
tab?.addEventListener("click", handleShowTabs);

function handleShowTabs(event) {
  if (event.target.tagName !== "P") return;

  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));

  document
    .querySelectorAll(".tab_content")
    .forEach((c) => c.classList.remove("active"));

  event.target.classList.add("active");

  document.getElementById(event.target.dataset.tab).classList.add("active");
}

// ******************** Show Menu When Scroll ***************
let lastScrollY = window.screenY;

window.addEventListener("scroll", showNavbar);

function showNavbar() {
  const navbar = document.getElementById("navbar");
  const title = document.getElementById("title");

  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) navbar.style.top = "-300px";
  else navbar.style.top = "0px";

  if (currentScrollY < lastScrollY) {
    navbar?.classList?.add("show");
    title.style.paddingTop = "80px";
  } else {
    navbar?.classList?.remove("show");
    title.style.paddingTop = "0px";
  }

  lastScrollY = currentScrollY;
}

// *********************** Observe Element For Add Animation When It is in Viewport Browser ************************

function appearAnimation() {
  const includeAnimation = document.querySelectorAll("#animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animateClass = entry.target.getAttribute("data-animate-class");
          entry.target.classList.add(animateClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0 }
  );

  includeAnimation.forEach((element) => {
    observer.observe(element);
  });
}

appearAnimation();

// ********************** Add Animation Delay To Items **************************

const items = document.querySelectorAll(".item_delay");

let delay = 0;

items.forEach((item, index) => {
  item.style.animationDelay = `${delay}s`;

  delay += 0.1;
});
