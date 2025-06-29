import Store from "./js/Store.js"
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const size = {}
 size.height = canvas.height = window.innerHeight
 size.width = canvas.width = window.innerWidth

window.addEventListener("resize", () => {
	size.height = canvas.height = window.innerHeight
	size.width = canvas.width = window.innerWidth
})

// Loading Images
const imgs = []
const imgsCount = 8

const imgsLoaded = new Event("imgsLoaded")

Store.then(products => {

	for (let i = 0; i <= imgsCount; i++) {
		const img = new Image()
		const index = Math.floor(Math.random() * imgsCount)	// random img out of store
		img.src = products[index].pic

		img.onload = () => {

			imgs.push(img);

			// Fire Event when all images are loaded
			if (imgs.length == imgsCount) document.dispatchEvent(imgsLoaded) 
		}
	}
})


// When all Imgaes are loaded
document.addEventListener("imgsLoaded", (e) => {

	render(size.width, size.height)

})

// Check is we scrolling up or down

let scrollDelta = 1,
	previousScroll = window.scrollY;

window.addEventListener("scroll", e => {
	scrollDelta = window.scrollY - previousScroll;

	previousScroll = window.scrollY;
})



const slice = Math.PI * 2 / imgsCount

let time = 0,
	delta = 16,
	incrementFactor = 0;

function render(width, height) {

	const radiusX = width * 0.45,
		radiusY = height * 0.35,
		centerX = width * 0.5,
		centerY = height * 0.5;

	ctx.clearRect(0, 0, width, height)

	for (let i = 0; i < imgsCount; i++) {
		let angle = i * slice + incrementFactor,
			x = radiusX * Math.cos(angle),
			y = radiusY * Math.sin(angle),

			imgSize = height * 0.15 * Math.sin(angle),

			img = imgs[i];

			ctx.save()
			ctx.translate(centerX - imgSize * 0.5 , centerY - imgSize * 0.5)
			ctx.drawImage(img, x, y, imgSize, imgSize)

			ctx.restore()

	}

	requestAnimationFrame(now => {
	 	delta = now - time;

		time = now;

		scrollDelta > 0 ? incrementFactor += delta * 0.0001 : incrementFactor -= delta * 0.0001

		render(size.width, size.height)

	})
}