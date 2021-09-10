import { Injectable } from '@angular/core';

@Injectable()
export class DisciplinasService {

  disciplinas: string[] = [
    'Negócios e Marketing e Eletrônicos',
    'Desenvolvimento para Servidores II',
    'Ingles V',
    'Projeto de Prototipagem e Testes de Usabilidade',
    'Desenvolvimento para Dispositivos Móveis I',
    'Tópicos Especiais em Sistemas para Internet II',
    'Estágio Supervisionado em Sistemas para Internet',
    'Projeto de Trabalho de Graduação em Sistemas para Internet I'
  ];

  constructor() { }

  add(title: string) {
    this.disciplinas.push(title);
  }
  remove(index: number) {
    this.disciplinas.splice(index, 1);
  }
  getList() {
    return this.disciplinas;
  }
}