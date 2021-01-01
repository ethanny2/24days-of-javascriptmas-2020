/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red.
So we will use Javascript to add that styling to it. If the characters drop below 0, 
we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the remaining of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!
*/

const tweetArea = document.querySelector('#string');
const counter = document.querySelector('#counterFooter');
const tweetBtn = document.querySelector('#btn');
//REMAINING CHARS
let remaining = 140;
const MAX_CHARS = 140;

tweetArea.addEventListener('keydown', (e) => {
	const selectedText = handleSelect();
	const { key } = e;
	if (selectedText) {
		remaining = MAX_CHARS - tweetArea.textContent.length;
		counter.textContent = `${remaining}/140`;
	} else {
		if (remaining <= 0) {
			key === 'Backspace' ? remaining++ : remaining--;
		} else if (remaining >= 140 && key !== 'Backspace') {
			remaining--;
		} else if (remaining < 140 && remaining > 0) {
			key === 'Backspace' ? remaining++ : remaining--;
		} else {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	remaining <= 20
		? (counter.style.color = 'red')
		: (counter.style.color = 'white');
	//Disable if no more chars
	if (remaining < 0) {
		tweetBtn.setAttribute('disabled', true);
		tweetBtn.classList.add('buttonDisabled');
	} else {
		tweetBtn.setAttribute('disabled', true);
		tweetBtn.classList.remove('buttonDisabled');
	}
	counter.textContent = `${remaining}/140`;
});

/* Current the above code doesn't work if you select chunks of text to cut out or in*/
function handleSelect() {
	if (typeof window.getSelection != 'undefined') {
		return window.getSelection().toString();
	}
}
