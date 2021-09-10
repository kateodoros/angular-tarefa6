import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private temporizador: any;
  private counter = 0;

  constructor() {}

  start(ms: number) {
    if (!this.temporizador) {
      if (ms) {
        this.temporizador = setInterval(() => {
          this.counter++;
        }, ms);
      }
    }
  }
  stop() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
      this.temporizador = null;
    }
  }
  reset() {
    if (this.temporizador) {
      clearInterval(this.temporizador);
      this.temporizador = null;
      this.counter = 0;
    } else {
      clearInterval(this.temporizador);
      this.temporizador = null;
      this.counter = 0;
    }
  }

   getCount() {
    return this.counter;
  }
}
