import { Component, OnInit , HostListener, ViewChild ,ElementRef} from '@angular/core';

// import "src/assets/agency.js";


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: [
    './barra-navegacion.component.css',
    '../assets/agency.css'
  ]
})
export class BarraNavegacionComponent implements OnInit {
  responsiveTop: String="navbar navbar-expand-lg navbar-dark fixed-top";
  @ViewChild('mainNav') mainNav:ElementRef;  
  @ViewChild('menuColapsable') menuColaps:ElementRef;




  constructor() { 
    
  }
  ngOnInit() {
  }



 

  @HostListener("window:scroll", ['event'])
  scrollComponente(event:Event){
    let scrollOffset = window.scrollY;
    if (scrollOffset>150){
      this.responsiveTop='navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink';
    }else{
      this.responsiveTop='navbar navbar-expand-lg navbar-dark fixed-top';
    }
  }

  clickMenu(){
    console.log("se presiono el boton");
    console.log(this.menuColaps);
    let x :DOMTokenList;
    x=this.menuColaps.nativeElement.classList;
    x.remove("show");
    
  }



  

  

}
