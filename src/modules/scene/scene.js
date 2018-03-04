import { Camera } from './camera';
import { Lighting } from './lighting';
import { Player } from './player';

class Scene {
  constructor(width, height) {
    this.scene = new THREE.Scene();
    this.colliderSystem = new Collider.System();
    this.player = new Player(this.scene, this.colliderSystem);
    this.camera = new Camera(width, height, this.player.position);
    this.lighting = new Lighting(this.scene);

    // test the scene

    for (var i=1; i<20; i++) {
      const size = Math.random() * 5 + 5;
      const mesh = new THREE.Mesh(
        new THREE.BoxBufferGeometry(5, 1, 5),
        new THREE.MeshPhongMaterial({})
      );
      mesh.position.set(Math.random() * 15 - 7, i * 2.5, 0);
      this.scene.add(mesh);
      this.colliderSystem.add(new Collider.Mesh(mesh))
    }
  }

  update(delta) {
    this.player.update(delta);
    this.camera.update(delta);
  }

  getScene() {
    return this.scene;
  }

  getCamera() {
    return this.camera.getCamera();
  }
}

export { Scene };
