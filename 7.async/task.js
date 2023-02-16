class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time, callback, id = null) {
        if (id === null) {
            throw new Error ("Идентификатор звонка не задан")
        }
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            console.error("Звонок с таким id уже установлен");
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    removeClock (id) {
       
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime () {
        let currentTime = new Date().toLocaleTimeString().slice(0,-3);
        return currentTime;
    }

    start () {
        let checkClock = (alarm) => {
            let timeNow = this.getCurrentFormattedTime();
            console.log(time);
            if (alarm.time === timeNow){
                alarm.callback;
                return;
            }
        };        
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(alarm => console.log(`Установлен будильник ${alarm.id} на ${alarm.time}`));
    }

    clearAlarms () {
        this.stop;
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarmClock = new AlarmClock;
    let currentTime = alarmClock.getCurrentFormattedTime();
    console.log(currentTime);
    let currentTimePlusOneMinute = currentTime.split(":")[0] + 
    ":" + ("0" +(Number.parseInt(currentTime.split(":")[1])+1)).slice(-2);
    let currentTimePlusTwoMinute = currentTime.split(":")[0] + 
    ":" + ("0" +(Number.parseInt(currentTime.split(":")[1])+2)).slice(-2);

    alarmClock.addClock(currentTime, () => {
    console.log("Подъем");
    console.log("Уже утро");
    console.log("Проспишь!");
    }, 1);

    alarmClock.addClock(currentTimePlusOneMinute,() => {
        console.log("Доброе утро!");
        alarmClock.removeClock(2)},2);

    alarmClock.addClock(currentTimePlusTwoMinute, () => {
        console.log("Подъём");
        alarmClock.stop();
        alarmClock.clearAlarms();
        alarmClock.printAlarms();
    }, 3);

    alarmClock.start();
    alarmClock.stop();
    alarmClock.printAlarms();

}

testCase();