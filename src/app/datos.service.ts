import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class DatosService {
  
  constructor(private httpclient : HttpClient) { 
    console.log('Funciona la conexion');

  }

  getData(){
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');

  }
}
