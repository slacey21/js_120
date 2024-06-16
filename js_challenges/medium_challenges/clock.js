class Clock {
  constructor(hours, minutes) {
    this.setTime(hours, minutes);
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  add(minutesToAdd) {
    return new Clock(this.hours, this.minutes + minutesToAdd);
  }

  subtract(minutesToSubtract) {
    return new Clock(this.hours, this.minutes - minutesToSubtract);
  }

  toString() {
    return String(this.hours).padStart(2, "0") + ":" + String(this.minutes).padStart(2, "0");
  }

  setTime(hours, minutes) {
    const HOURS_PER_DAY = 24;
    const MINUTES_PER_HOUR = 60;

    if (minutes < 0) {
      hours += Math.ceil(minutes / MINUTES_PER_HOUR) - 1;
      minutes = MINUTES_PER_HOUR + (minutes % MINUTES_PER_HOUR);
    } else {
      hours += Math.floor(minutes / MINUTES_PER_HOUR);
      minutes %= MINUTES_PER_HOUR;
    }

    hours %= HOURS_PER_DAY;

    if (hours < 0) {
      hours = HOURS_PER_DAY + hours;
    }

    this.hours = hours;
    this.minutes = minutes;
  }

  isEqual(clock) {
    return (this.hours === clock.hours && this.minutes === clock.minutes);
  }
}


let clock = Clock.at(8);
console.log(clock);

module.exports = Clock;