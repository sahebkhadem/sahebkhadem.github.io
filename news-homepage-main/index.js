const openMenueButton = document.getElementById("open-menu-btn");
const closeMenueButton = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("backdrop");

openMenueButton.addEventListener("click", () => {
	backdrop.style.display = "block";
	mobileMenu.classList.remove("menu-closed");
	mobileMenu.classList.add("menu-open");
});

closeMenueButton.addEventListener("click", closeMenu);

backdrop.addEventListener("click", closeMenu);

function closeMenu() {
	backdrop.style.display = "none";
	mobileMenu.classList.remove("menu-open");
	mobileMenu.classList.add("menu-closed");
}
