(() => {

	let aboutImages = document.querySelectorAll(".aboutImageContainer"),
		aboutDescription = document.querySelector(".aboutInfo");


	const bioData = [
		["leftAbout", `Left Info `],

		["rightAbout", `Right Info `]

	];

	function showBio() {
		aboutDescription.textContent = `${bioData[this.dataset.offset][1]}`;
	}

	aboutImages.forEach(button => button.addEventListener("click", showBio));

})();

