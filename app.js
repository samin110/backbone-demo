const navItem = document.querySelectorAll(".nav_item");

const pathname = window.location.pathname;

navItem.forEach((i) => {
  if (pathname.includes(i.textContent.trim().toLowerCase())) {
    console.log(i);
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
closeDrawerMenuIcon?.addEventListener("click", closeMenu);

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
    title ? (title.style.paddingTop = "80px") : null;
  } else {
    navbar?.classList?.remove("show");
    title ? (title.style.paddingTop = "0px") : null;
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
    { threshold: 0.8 }
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

  delay += 0.08;
});

// ********************* Loading For Initial Page  ************************

const loading = document.querySelector(".loading");
const loading_wrapper = document.querySelector(".loading_wrapper");
const container_page = document.querySelector(".container_page");

document.onreadystatechange = function (e) {
  if (document.readyState !== "complete") {
    const loading_progress_bar = document.querySelector(
      ".loading_progress_bar"
    );
    const loading_percentage = document.querySelector(".loading_percentage");
    let progress = 0;

    // Function to simulate loading progress
    function updateLoadingPercentage() {
      // Simulate loading by incrementing the percentage
      const interval = setInterval(() => {
        progress += 1; // Increase by a random value between 1 and 5
        if (progress >= 100) {
          progress = 100; // Cap the progress at 100%
          clearInterval(interval);
        }

        // Update the percentage text
        loading_percentage
          ? (loading_percentage.textContent = `${progress}%`)
          : null;
        loading_progress_bar
          ? (loading_progress_bar.style.width = `${progress}%`)
          : null;
      }, 15);
    }

    // Start updating loading percentage
    updateLoadingPercentage();
  } else {
    setTimeout(() => {
      container_page ? (container_page.style.display = "block") : null;
      loading_wrapper
        ? (loading_wrapper.style.transform = "translateY(-3000px)")
        : null;
    }, 1000);
  }
};
