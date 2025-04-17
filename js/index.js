// const horizontalSections = document.querySelectorAll("section.featured")[0];
const horizontalSectionContainer = document.querySelector(".carousel-container");
const horizontalSection = document.querySelector(".carousel");

const widthDiff = horizontalSection.scrollWidth - horizontalSectionContainer.clientWidth;

horizontalSectionContainer.style.height = horizontalSectionContainer.clientHeight + widthDiff + "px";

console.log(widthDiff)
console.log(horizontalSection.scrollWidth)
console.log(horizontalSectionContainer.scrollWidth)

const options = {
	threshold: 1
}
const observer = new IntersectionObserver(scroll, options)

observer.observe(horizontalSection)

function scroll(entries) {

	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log(entry)

			window.addEventListener("scroll", handleScroll)
		} 
	})
}

function handleScroll(e) {
	horizontalSection.style.transform = `translate3D( ${-horizontalSection.offsetTop}px, 0px, 0px)`

	console.log(horizontalSection.offsetTop)
}