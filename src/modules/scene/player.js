import { Keyboard } from '../input';
import { Blend } from '../maths';

class Player {
  constructor(scene, colliderSystem) {
    // represents the player

    this.position = new THREE.Vector3(0, 1, 0);
    this.motion = new THREE.Vector3();
    this.target = {
      position: new THREE.Vector3(),
      motion: new THREE.Vector3()
    };
    this.speed = 10;
    this.jump = 17;
    this.falling = false;
    this.fallTime = 0;
    this.fallTimeThreshold = 0.125;
    this.keys = {};
    this.keyboard = new Keyboard((key) => { this.onKeyboard(key); });
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.collider.setPhysics({gravity: 38});
    this.colliderSystem = colliderSystem;
    this.group = new THREE.Group();
    this.mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshPhongMaterial({}));
    this.mesh.position.y = 0.5;
    this.light = new THREE.PointLight(0xffffff, 0.25, 5, 2);
    this.light.position.y = 2;
    this.group.add(this.mesh, this.light);

    // add to scene

    scene.add(this.group);
  }

  onKeyboard(key) {
    switch (key) {
      case 'a': case 'A': case 'ArrowLeft':
        this.keys.left = this.keyboard.keys[key];
        break;
      case 'd': case 'D': case 'ArrowRight':
        this.keys.right = this.keyboard.keys[key];
        break;
      case 'w': case 'W': case 'ArrowUp':
        this.keys.up = this.keyboard.keys[key];
        break;
      case 's': case 'S': case 'ArrowDown':
        this.keys.down = this.keyboard.keys[key];
        break;
      case ' ':
        this.keys.jump = this.keyboard.keys[key];
        break;
      default:
        break;
    }
  }

  move(delta) {
    // translate key input to motion

    if (this.keys.left || this.keys.right) {
      this.target.motion.x = ((this.keys.left ? 1 : 0) + (this.keys.right ? -1 : 0)) * this.speed;
    } else {
      this.target.motion.x = 0;
    }

    if (this.keys.up || this.keys.down) {
      this.target.motion.z = ((this.keys.up ? 1 : 0) + (this.keys.down ? -1 : 0)) * this.speed;
    } else {
      this.target.motion.z = 0;
    }

    if (this.keys.jump) {
      this.keys.jump = false;

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
      this.motion.x = Blend(this.motion.x, this.target.motion.x, 0.15);
      this.motion.z = Blend(this.motion.z, this.target.motion.z, 0.15);
    }
  }

  update(delta) {
    this.move(delta);
    this.collider.move(delta, this.colliderSystem);
    this.position.x = Blend(this.position.x, this.target.position.x, 0.4);
    this.position.y = Blend(this.position.y, this.target.position.y, 0.4);
    this.position.z = Blend(this.position.z, this.target.position.z, 0.4);
    this.group.position.set(this.position.x, this.position.y, this.position.z);
  }
}

export { Player };
