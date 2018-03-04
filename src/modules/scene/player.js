import { Keyboard } from '../input';
import { Blend } from '../maths';

class Player {
  constructor(scene, colliderSystem) {
    // represents the player

    this.scene = scene;
    this.position = new THREE.Vector3();
    this.motion = new THREE.Vector3();
    this.target = { position: new THREE.Vector3(), };
    this.speed = 6;
    this.jump = 12;
    this.falling = false;
    this.fallTime = 0;
    this.fallTimeThreshold = 0.1;
    this.keys = {};
    this.keyboard = new Keyboard((key) => { this.onKeyboard(key); });
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.colliderSystem = colliderSystem;
  }

  onKeyboard(key) {
    switch (key) {
      case 'a': case 'A': case 'ArrowLeft':
        this.keys.left = this.keyboard.keys[key];
        break;
      case 'd': case 'D': case 'ArrowRight':
        this.keys.right = this.keyboard.keys[key];
        break;
      case 'w': case 'W': case 'ArrowUp': case ' ':
        this.keys.up = this.keyboard.keys[key];
        break;
      case 's': case 'S': case 'ArrowDown':
        this.keys.down = this.keyboard.keys[key];
        break;
      default:
        break;
    }
  }

  move(delta) {
    // translate key input to motion

    if (this.keys.left || this.keys.right) {
      this.target.motion.z = ((this.keys.left ? -1 : 0) + (this.keys.right ? 1 : 0)) * this.speed;
    }

    if (this.keys.up) {
      this.keys.up = false;
      
      if (this.motion.y == 0 || this.fallTime < this.fallTimeThreshold) {
        this.motion.y = this.jump;
        this.fallTime = this.fallTimeThreshold;
      }
    }

    this.falling = (this.motion.y != 0);
    this.fallTime = (this.falling) ? this.fallTime + delta : 0;

    if (!this.falling) {
      this.motion.x = this.target.motion.x;
      this.motion.z = this.target.motion.z;
    } else {
      this.motion.x = Blend(this.motion.x, this.target.motion.x, 0.1);
      this.motion.z = Blend(this.motion.x, this.target.motion.x, 0.1);
    }
  }

  update(delta) {
    this.move();
    this.collider.move(this.colliderSystem);
    this.position.x = Blend(this.position.x, this.target.position.x, 0.1);
    this.position.y = Blend(this.position.y, this.target.position.y, 0.1);
    this.position.z = Blend(this.position.z, this.target.position.z, 0.1);
  }
}

export { Player };
