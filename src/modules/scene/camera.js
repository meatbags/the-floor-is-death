class Camera {
  constructor(width, height) {
    this.fov = 90;
    this.aspectRatio = width / height;
    this.near = 0.1;
    this.far = 1000;
    this.origin = new THREE.Vector3(0, 0, 0);
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, this.near, this.far);
    this.camera.updateProjectionMatrix();
    this.camera.position.set(10, 5, 10);
    this.camera.lookAt(this.origin);
  }

  getCamera() {
    return this.camera;
  }
}

export { Camera };
