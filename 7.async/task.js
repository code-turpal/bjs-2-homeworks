class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(time === undefined || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for (let obj of this.alarmCollection) {
            if(obj.time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }

        this.alarmCollection.push({
            callback,
            time,
            canCall: true,
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((obj) => obj.time !== time);
    }

    start() {
        if (this.intervalId) {
            return;
        }

        function callStart() {
            let currentTime = new Date();
            currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

            this.alarmCollection.forEach(element => {
                if(element.time === currentTime && element.canCall === true) {
                    element.canCall = false;
                    this.callback();
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
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}