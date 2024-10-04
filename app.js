const navItem = document.querySelectorAll("#nav");

const pathname = window.location.pathname;

navItem.forEach((i) => {
  console.log(i.textContent.trim());
  if (pathname.includes(i.textContent.trim().toLowerCase())) {
    i.style.fontWeight = "600";
  }
});
