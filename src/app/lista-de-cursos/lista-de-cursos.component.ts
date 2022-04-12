import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-cursos',
  templateUrl: './lista-de-cursos.component.html',
  styleUrls: ['./lista-de-cursos.component.css']
})
export class ListaDeCursosComponent {

  cursos = [
    {curso: 'Angular',
      cargaHoraria: '40'
    },
    {
      curso: 'React',
      cargaHoraria: '42'
    },
    {
      curso: 'Vue',
      cargaHoraria:'35'
    },
    {
      curso: 'Bootstrap',
      cargaHoraria:'12'
    }
  ]

  numero: number
  isVisible: boolean = false
  escolherAleatorio() {
    this.numero = Math.floor((Math.random() * this.cursos.length));
    console.log(this.numero);
    this.isVisible = true;
  }
}
