import utils from "./utils.js"
export default class HorizontalSmoothScroll {

	constructor (container) {
		this.horizontalSectionContainer = container 
		this.horizontalSection = container.children[0];

		window.addEventListener("scroll", e => {
			utils.throttleFn(this.smoothScroll(e), 10)
		})

	}

	calculateContainerHeight() {

		this.widthDiff = this.horizontalSection.scrollWidth - this.horizontalSectionContainer.clientWidth;
		// this.horizontalSectionContainer.style.height = this.horizontalSectionContainer.clientHeight + (this.horizontalSection.clientHeight * 2) + this.widthDiff + "px";
		this.horizontalSectionContainer.style.height = (this.horizontalSection.clientHeight * 2) + this.widthDiff + "px";
	}	
	smoothScroll (e) {
		const currentScrollY = window.scrollY + window.innerHeight,
		  containerOffsetTop = this.horizontalSection.clientHeight + this.horizontalSectionContainer.offsetTop,
		  scrollYOffsetDiff =  currentScrollY - containerOffsetTop;

		const isIntersecting = (scrollYOffsetDiff > 0) && (scrollYOffsetDiff < (this.horizontalSectionContainer.clientHeight - this.horizontalSection.clientHeight)) 

		if (isIntersecting) {

			this.horizontalSection.animate([
				//Keyframes
				{transform:  `translate3D( ${-scrollYOffsetDiff}px, ${scrollYOffsetDiff}px, 0px) skew(${(scrollYOffsetDiff /this.horizontalSectionContainer.clientHeight) * 2}deg)`}
			],
			{
				duration: 100,
				fill: "forwards",
				easing: "ease-in"

			})
		}
	}
}