const navItem = document.querySelectorAll("#nav");

const pathname = window.location.pathname;

navItem.forEach((i) => {
  console.log(i.textContent.trim());
  if (pathname.includes(i.textContent.trim().toLowerCase())) {
    i.style.fontWeight = "600";
  }
});

// Burger Menu Section
const burgerIcon = document.getElementById("burger_menu");
const drawerMenuContainer = document.getElementById("drawer_menu_container");

// Open Drawer Menu
burgerIcon.addEventListener("click", openMenu);

function openMenu() {
  drawerMenuContainer.style.transform = "translateX(0)";
}

// Close Drawer Menu
const closeDrawerMenuIcon = document.getElementById("close_drawer_menu");
closeDrawerMenuIcon.addEventListener("click", closeMenu);

function closeMenu() {
  drawerMenuContainer.style.transform = "translateX(100%)";
}

// *************** Tabs Section *****************
const tab = document.querySelector(".tabs_container");
tab.addEventListener("click", handleShowTabs);

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

  console.log(event.target.textContent);
}
