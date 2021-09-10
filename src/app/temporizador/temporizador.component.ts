import { Component, OnInit, Input } from '@angular/core';
import { TemporizadorService } from '../temporizador.service';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {
  @Input() intervalo: number;

  constructor(public temporizador: TemporizadorService) { 
    this.temporizador.start(this.intervalo * 1000);
  }

  ngOnInit() {
  }

}