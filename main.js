const menuBtn = document.querySelector(".menu-btn");
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");

	// if (!menuOpen) {
	//     menuBtn.classList.add("open");
	//     menuOpen = true;
	// } else {
	//     menuBtn.classList.remove("open");
	//     menuOpen = false;
	// }
});

// photo section

previews.forEach((preview) => {
	preview.addEventListener("click", () => {
		modal.classList.add("open");
		original.classList.add("open");
		const originalSrc = preview.getAttribute("data-original");
		original.src = `./full/${originalSrc}`;
		const altText = preview.alt;
		caption.textContent = altText;
	});
});

modal.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal")) {
		modal.classList.remove("open");
		original.classList.remove("open");
	}
});
