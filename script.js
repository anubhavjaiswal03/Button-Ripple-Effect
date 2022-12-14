const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const x = e.clientX;
		const y = e.clientY;

		// console.log(x, y);

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		// console.log(x - buttonLeft, y - buttonTop);
		const yInside = y - buttonTop;
		const xINside = x - buttonLeft;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xINside + 'px';

		this.appendChild(circle);

		// console.log(circle);
		setTimeout(() => circle.remove(), 500);
	});
});
