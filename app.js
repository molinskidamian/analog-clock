class Clock {
	constructor() {
		this.hour = document.querySelector('.hour');
		this.minute = document.querySelector('.minute');
		this.second = document.querySelector('.second');
	}

	tick = () => {
		let date = new Date();
		let h = date.getHours() * 30; // wartość od 0 - 23
		let m = date.getMinutes() * 6; // wartość od 0 - 59;
		let s = date.getSeconds() * 6; // wartość od 0 - 59;

		this.hour.style.transform = `rotateZ(${h + m / 12}deg)`;
		this.minute.style.transform = `rotateZ(${m}deg)`;
		this.second.style.transform = `rotateZ(${s}deg)`;
	};

	start() {
		setInterval(this.tick, 1000);
	}
}

const clock = new Clock();
clock.start();
