class Camera {
  constructor(width, height, origin) {
    // perspective camera

    this.origin = origin;
    this.fov = 75;
    this.aspectRatio = width / height;
    this.angle = -Math.PI * 0.5;
    this.len = 10;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, 0.1, 1000);
  }

  update(delta) {
    this.camera.position.set(this.origin.x + Math.cos(this.angle) * this.len, this.origin.y + this.len * 0.625, this.origin.z + Math.sin(this.angle) * this.len);
    this.camera.lookAt(this.origin);
  }

  getCamera() {
    return this.camera;
  }
}

export { Camera };
