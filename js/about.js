(() => {

	let aboutImages = document.querySelectorAll(".aboutImageContainer"),
		aboutDescription = document.querySelector(".aboutInfo");


	const bioData = [
		["leftAbout", `Born in 1793, John Keiths was schooled in Halifax, Nova Scotia, Canada during his early days. Later on he would find
		himself enlisted in the Canadian Royal Arms and was awarded with the prestigious medal of "Moderate Participation in Training Exercises"
		in 1810. During the famous War Of 1812, he assisted the legendary Major-General Sir Isaac Brock in the upper Canadian Regiment. During
		the war he became friends with Liam Alex, and then collectively founded Alex + Keiths, expressing their enthusiasm towards alcoholic beverages. `],

		["rightAbout", `Born in 1791, Liam Alex was a carpenter who worked for a local construction business in Quebec in his early days and attended
		McGill University later on. In 1811 he graduated from the general business BA program and was enlisted in the Canadian Military Construction
		Unit. In the War Of 1812 he served under Major-General Sir Isaac Brock where he would build outposts and forts in mere hours providing
		positional advantage. During his time in the ranks he met John Keiths and later co-founded Alex + Keiths in 1820.`]

	];

	function showBio() {
		aboutDescription.textContent = `${bioData[this.dataset.offset][1]}`;
	}

	aboutImages.forEach(button => button.addEventListener("click", showBio));

})();

