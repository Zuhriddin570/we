// Poem text
const kiplingPoem = `<p>Javascript yaxshilab o'rganishimiz <span>kerak</span> juda ko'p ishlar qilsa bo'larkan mana bu yorqin <span>misoli</span> xullas 'Veb dasturlash - bu uy qurish kabi. Devorlari qurilishidan oldin mustahkam asos yaratish kerak' <span>Jonas Schmedtmann</span> 'Dasturlash - bu nafaqat kod yozish, balki dunyoni yangi shaklga keltirishdir' <span>Tim Berners-Lee (World Wide Webni yaratuvchi)</span>
'Yaxshi dasturchi to'g'ri yechimni topadigan emas, balki eng yaxshi yechimni topadigan kishidir' <span>Steve Jobs</span> 'Dasturlash - bu kreativlik va mantiqni birlashtirish san'ati'<span>Sahil Vora</span> </p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
