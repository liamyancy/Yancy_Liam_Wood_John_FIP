(() => {

	let mainText = document.querySelector("#beerButton1"),
		secondText = document.querySelector("#beerButton2"),
		heroTransition = document.querySelector(".beerTextAnimation"),
		textMain = document.querySelector(".textMain"),
		textAlt = document.querySelector(".textAlt"),
		beerImageMain = document.querySelector(".mainBeerImage"),
		beerImageAlt = document.querySelector(".altBeerImage");

	function swapButtons() {
		mainText.classList.remove("selectedButton");
		secondText.classList.add("selectedButton");
		textMain.classList.add("hidden");
		textAlt.classList.remove("hidden");
		textAlt.classList.add("beerTextAnimation");
		beerImageMain.classList.add("hidden");
		beerImageAlt.classList.remove("hidden");
		beerImageAlt.classList.add("beerTextAnimation");
	}

	function swapBack() {
		mainText.classList.add("selectedButton");
		secondText.classList.remove("selectedButton");
		textAlt.classList.add("hidden");
		textMain.classList.remove("hidden");
		textMain.classList.add("beerTextAnimation");
		beerImageAlt.classList.add("hidden");
		beerImageMain.classList.remove("hidden");
		beerImageMain.classList.add("beerTextAnimation");
	}

	secondText.addEventListener("click", swapButtons);
	mainText.addEventListener("click", swapBack);
})();
