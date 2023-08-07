class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some(obj => obj.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((obj) => obj.time !== time);
	}

	getCurrentFormattedTime() {
		let currentDate = new Date();
		return currentDate.toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}

		function callStart() {
			this.alarmCollection.forEach(obj => {
				if (obj.time === this.getCurrentFormattedTime() && obj.canCall === true) {
					obj.canCall = false;
					obj.callback();
				}
			});
		}

		this.intervalId = setInterval(callStart.call(this), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(obj => obj.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}