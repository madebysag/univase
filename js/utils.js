export default {

	lerp: (norm, min, max) => {
		return (max - min) * norm + min;
	},

	normalize: (value, min, max) => {
		return (vlaue - min) / (max - min);
	},

	throttleFn: (fn, delay) => {
		let timeout = null;

		if (!timeout) {
			return (...args) => {
				timeout = setTimeout(() => {
					fn(...args)
					timeout = null;
				}, delay)
			}
		}
	}

}
 