const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let photoIndex = Number(
	getComputedStyle(document.documentElement).getPropertyValue('--photoIndex')
); // 0 at start
const numPhotos = getComputedStyle(document.documentElement).getPropertyValue(
	'--numPhotos'
); //5

prevButton.addEventListener('click', function (e) {
	if (photoIndex > 0) {
		photoIndex--;
		document.documentElement.style.setProperty('--photoIndex', photoIndex);
		fadeButtonOnEnd();
	}
});

nextButton.addEventListener('click', function (e) {
	if (photoIndex < numPhotos - 1) {
		photoIndex++;
		document.documentElement.style.setProperty('--photoIndex', photoIndex);
		fadeButtonOnEnd();
	}
});

/* Both buttons should check their state (what index) then determine if they need their opacity lowered */
function fadeButtonOnEnd() {
	photoIndex === 0
		? prevButton.classList.add('end')
		: prevButton.classList.remove('end');
	photoIndex === numPhotos - 1
		? nextButton.classList.add('end')
		: nextButton.classList.remove('end');
}
