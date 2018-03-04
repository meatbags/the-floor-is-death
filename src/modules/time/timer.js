class Timer {
  constructor() {
    // timekeeping

    this.time = (new Date()).getTime();
    this.age = 0;
  }

  getDelta() {
    // update timer, get delta time

    const now = (new Date()).getTime();
    const delta = (now - this.time) / 1000.;
    this.age += delta;
    this.time = now;

    return delta;
  }
}

export { Timer };
