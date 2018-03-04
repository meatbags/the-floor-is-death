import { Renderer } from './render';
import { Scene } from './scene';
import { Timer } from './time';

class Master {
  constructor() {
    this.width = 960;
    this.height = 540;
    this.scene = new Scene(this.width, this.height);
    this.renderer = new Renderer(this.width, this.height, this.scene.getScene(), this.scene.getCamera());
    this.timer = new Timer();
    this.loop();
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
