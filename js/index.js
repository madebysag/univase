// const horizontalSections = document.querySelectorAll("section.featured")[0];
const horizontalSectionContainer = document.querySelector(".carousel-container");
const horizontalSection = document.querySelector(".carousel");

const widthDiff = horizontalSection.scrollWidth - horizontalSectionContainer.clientWidth;


horizontalSectionContainer.style.height = horizontalSectionContainer.clientHeight + (horizontalSection.clientHeight * 2) + widthDiff + "px";




window.addEventListener("scroll", e => {

	const currentScrollY = window.scrollY + window.innerHeight,
		  containerOffsetTop = horizontalSection.clientHeight + horizontalSectionContainer.offsetTop,
		  scrollYOffsetDiff =  currentScrollY - containerOffsetTop;

	const isIntersecting = (scrollYOffsetDiff > 0) && (scrollYOffsetDiff < (horizontalSectionContainer.clientHeight - horizontalSection.clientHeight)) 

	if (isIntersecting) {

		horizontalSection.style.transform = `translate3D( ${-scrollYOffsetDiff}px, ${scrollYOffsetDiff}px, 0px)`

	} 
})
