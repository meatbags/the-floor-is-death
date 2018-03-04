import '../../../lib/glsl';

class Renderer {
  constructor(width, height, scene, camera) {
    // webgl renderer

    this.scene = scene;
    this.camera = camera;
    this.width = width;
    this.height = height;
    this.size = new THREE.Vector2(this.width, this.height);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x101010, 1);
    this.postProcessingSetup();

    // add to doc

    $('.content__inner').append(this.renderer.domElement);
  }

  postProcessingSetup() {
    // post processing passes

    const strength = 0.7;
    const radius = 1.0;
    const threshold = 0.7;
    this.renderPass = new THREE.RenderPass(this.scene, this.camera);
    this.bloomPass = new THREE.UnrealBloomPass(this.size, strength, radius, threshold);
    this.noisePass = new THREE.NoisePass();
    this.noisePass.renderToScreen = true;
    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(this.width, this.height);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.noisePass);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
  }

  render(delta) {
    this.composer.render(delta);
  }
}

export { Renderer };
