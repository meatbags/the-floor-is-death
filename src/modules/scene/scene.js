import { Camera } from './camera';
import { Lighting } from './lighting';
import { Player } from './player';

class Scene {
  constructor(width, height) {
    this.scene = new THREE.Scene();
    this.camera = new Camera(width, height);
    this.colliderSystem = new Collider.System();
    this.player = new Player(this.scene, this.colliderSystem);
    this.lighting = new Lighting(this.scene);

    this.scene.add(
      new THREE.Mesh(
        new THREE.BoxBufferGeometry(6, 2, 6),
        new THREE.MeshPhongMaterial({})
      )
    );
  }

  update(delta) {
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
