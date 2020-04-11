(() => {

	let mainHero = document.querySelector("#hero1"),
		secondHero = document.querySelector("#hero2"),
		heroTransition = document.querySelector(".heroAnimation"),
		heroMain = document.querySelector(".heroMain"),
		heroAlt = document.querySelector(".heroAlt");

	function swapButtons() {
		mainHero.classList.remove("selectedButton");
		secondHero.classList.add("selectedButton");
		heroMain.classList.add("hidden");
		heroAlt.classList.remove("hidden");
		heroAlt.classList.add("heroAnimation");
	}

	function swapBack() {
		mainHero.classList.add("selectedButton");
		secondHero.classList.remove("selectedButton");
		heroAlt.classList.add("hidden");
		heroMain.classList.remove("hidden");
		heroMain.classList.add("heroAnimation");
	}

	secondHero.addEventListener("click", swapButtons);
	mainHero.addEventListener("click", swapBack);
})();
