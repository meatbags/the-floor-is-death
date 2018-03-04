import { Renderer } from './renderer';
import { Scene } from './scene';
import { Timer } from './time';

class Master {
  constructor() {
    this.scene = new Scene();
    this.timer = new Timer();
  }

  loop() {
    // the main loop

    if (!this.paused) {
      if (!this.loopGuard) {
        this.loopGuard = true;
        requestAnimationFrame(() => {
          this.loopGuard = false;
          this.loop();
        });
      }

      const delta = this.timer.getDelta();
      this.scene.update(delta);
      this.renderer.render(delta);
    }
  }
}

export { Master };
