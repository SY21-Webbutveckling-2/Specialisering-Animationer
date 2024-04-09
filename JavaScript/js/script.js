let balls = [];

function setup() {
	let ballElements = document.getElementsByClassName('ball');

	for (let i = 0; i < ballElements.length; i++) {
		let width = ballElements[i].clientWidth;
		let height = ballElements[i].clientHeight;
		let ballObj = {
			element: ballElements[i],
			x: Math.random() * (window.innerWidth - width) + width / 2,
			y: Math.random() * (window.innerHeight - height) + height / 2,
			xSpeed: Math.random() * 20 - 10,
			ySpeed: Math.random() * 20 - 10,
		};

		balls.push(ballObj);
	}

	requestAnimationFrame(loop);
}

function loop() {
	for (let i = 0; i < balls.length; i++) {
		balls[i].x += balls[i].xSpeed;
		balls[i].y += balls[i].ySpeed;
		balls[i].element.style.left = balls[i].x + 'px';
		balls[i].element.style.top = balls[i].y + 'px';
	}

	bounce();

	requestAnimationFrame(loop);
}

function bounce() {
	for (let i = 0; i < balls.length; i++) {
		let width = balls[i].element.clientWidth;
		let height = balls[i].element.clientHeight;
		if (balls[i].x < width / 2 || balls[i].x > window.innerWidth - width / 2) {
			balls[i].xSpeed *= -1;
		}
		if (balls[i].y < height / 2 || balls[i].y > window.innerHeight - height / 2) {
			balls[i].ySpeed *= -1;
		}
	}
}

setup();