import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "luan"
  

  // consultarCursos(){
  //   for(let cursos of this.cursos ){
  //     const{curso, cargaHoraria} = cursos
  //     console.log(`Curso${curso}
  //     Carga Horaria ${cargaHoraria}
  //     `)
  //   }
  // }
}
