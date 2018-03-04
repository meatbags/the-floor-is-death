class Camera {
  constructor(width, height) {
    this.fov = 90;
    this.aspectRatio = width / height;
    this.near = 0.1;
    this.far = 1000;
    this.origin = new THREE.Vector3(0, 0, 0);
    this.angle = 0;
    this.len = 20;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, this.near, this.far);
  }

  update(delta) {
    this.angle += delta * Math.PI * 0.125;
    this.camera.position.set(Math.cos(this.angle) * this.len, this.len / 2, Math.sin(this.angle) * this.len);
    this.camera.lookAt(this.origin);
  }

  getCamera() {
    return this.camera;
  }
}

export { Camera };
