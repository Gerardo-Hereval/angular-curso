import { Component } from '@angular/core';
// import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [ ]= ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado:string='';


  borrarHeroe(){
  
    this.heroeBorrado=this.heroes.shift()||'';

  
  }
}
