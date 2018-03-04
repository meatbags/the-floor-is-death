import { Master } from './modules';

class App {
  constructor() {
    this.master = new Master();
  }
}

window.onload = () => { const app = new App(); };
