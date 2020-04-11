(() => {

	let originalFlavour = document.querySelector("#original"),
		lightFlavour = document.querySelector("#light"),
		spicedFlavour = document.querySelector("#spiced"),
		citrusFlavour = document.querySelector("#citrus"),
		originalInfo = document.querySelector("#originalText"),
		lightInfo = document.querySelector("#lightText"),
		spicedInfo = document.querySelector("#spicedText"),
		citrusInfo = document.querySelector("#citrusText"),
		originalDisplay = document.querySelector("#displayOriginal"),
		lightDisplay = document.querySelector("#displayLight"),
		spicedDisplay = document.querySelector("#displaySpiced"),
		citrusDisplay = document.querySelector("#displayCitrus");

	function selectOriginalInfo() {
		originalFlavour.classList.add("selectedProduct");
		lightFlavour.classList.remove("selectedProduct");
		spicedFlavour.classList.remove("selectedProduct");
		citrusFlavour.classList.remove("selectedProduct");
		originalDisplay.classList.remove("hidden")
		lightDisplay.classList.add("hidden")
		spicedDisplay.classList.add("hidden")
		citrusDisplay.classList.add("hidden")
	}

	function showOriginalInfo() {
		originalInfo.classList.remove("hidden");
		lightInfo.classList.add("hidden");
		spicedInfo.classList.add("hidden");
		citrusInfo.classList.add("hidden");
	}

	function selectLightInfo() {
		originalFlavour.classList.remove("selectedProduct");
		lightFlavour.classList.add("selectedProduct");
		spicedFlavour.classList.remove("selectedProduct");
		citrusFlavour.classList.remove("selectedProduct");
		originalDisplay.classList.add("hidden")
		lightDisplay.classList.remove("hidden")
		spicedDisplay.classList.add("hidden")
		citrusDisplay.classList.add("hidden")
	}

	function showLightInfo() {
		originalInfo.classList.add("hidden");
		lightInfo.classList.remove("hidden");
		spicedInfo.classList.add("hidden");
		citrusInfo.classList.add("hidden");
	}

	function selectSpicedInfo() {
		originalFlavour.classList.remove("selectedProduct");
		lightFlavour.classList.remove("selectedProduct");
		spicedFlavour.classList.add("selectedProduct");
		citrusFlavour.classList.remove("selectedProduct");
		originalDisplay.classList.add("hidden")
		lightDisplay.classList.add("hidden")
		spicedDisplay.classList.remove("hidden")
		citrusDisplay.classList.add("hidden")
	}

	function showSpicedInfo() {
		originalInfo.classList.add("hidden");
		lightInfo.classList.add("hidden");
		spicedInfo.classList.remove("hidden");
		citrusInfo.classList.add("hidden");
	}

	function selectCitrusInfo() {
		originalFlavour.classList.remove("selectedProduct");
		lightFlavour.classList.remove("selectedProduct");
		spicedFlavour.classList.remove("selectedProduct");
		citrusFlavour.classList.add("selectedProduct");
		originalDisplay.classList.add("hidden")
		lightDisplay.classList.add("hidden")
		spicedDisplay.classList.add("hidden")
		citrusDisplay.classList.remove("hidden")
	}

	function showCitrusInfo() {
		originalInfo.classList.add("hidden");
		lightInfo.classList.add("hidden");
		spicedInfo.classList.add("hidden");
		citrusInfo.classList.remove("hidden");
	}

	originalFlavour.addEventListener("click", selectOriginalInfo);
	lightFlavour.addEventListener("click", selectLightInfo);
	spicedFlavour.addEventListener("click", selectSpicedInfo);
	citrusFlavour.addEventListener("click", selectCitrusInfo);
	originalFlavour.addEventListener("click", showOriginalInfo);
	lightFlavour.addEventListener("click", showLightInfo);
	spicedFlavour.addEventListener("click", showSpicedInfo);
	citrusFlavour.addEventListener("click", showCitrusInfo);
})();
