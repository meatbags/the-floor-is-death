import { Keyboard } from '../input';

class Player {
  constructor(scene) {
    this.scene = scene;
    this.position = new THREE.Vector3();
    this.keyboard = new Keyboard((key) => { this.onKeyboard(key); });
  }

  onKeyboard(key) {
    const keyName = key.key;
    console.log(keyName, this.keyboard.keys[keyName]);
  }
}

export { Player };
