class Keyboard {
  constructor(onKeyboardEvent) {
    // keyboard event handlers

    this.keys = {};
    this.onKeyboardEvent = onKeyboardEvent;
    document.addEventListener('keydown', (key) => { this.onKeyDown(key); });
    document.addEventListener('keyup', (key) => { this.onKeyUp(key); });
  }

  onKeyDown(key) {
    this.keys[key.key] = true;
    this.onKeyboardEvent(key);
  }

  onKeyUp(key) {
    this.keys[key.key] = false;
    this.onKeyboardEvent(key);
  }

  isSpecial() {
    return (this.keys['Shift'] || this.keys['Control'] || this.keys['Alt']);
  }

  isControl() {
    return (this.keys['Control']);
  }

  isShift() {
    return (this.keys['Shift']);
  }

  isAlt() {
    return (this.keys['Alt']);
  }
}

export { Keyboard };
