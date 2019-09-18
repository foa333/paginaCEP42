import { Component, OnInit } from '@angular/core';
import{DatosService}from '../datos.service';
 
@Component({
  selector: 'app-holamundo-componente',
  templateUrl: './holamundo-componente.component.html',
  styleUrls: [
    './holamundo-componente.component.css',
    '../assets/agency.css'    
  ]
})
export class HolamundoComponenteComponent implements OnInit {
posts: Object;

  constructor(datosService:DatosService) { 
    datosService.getData().subscribe(data =>{
      
      this.posts=data;
      console.log(this.posts);
    });
  }
    
  ngOnInit() {
  }

}
