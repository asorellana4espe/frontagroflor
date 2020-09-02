import { Injectable } from '@angular/core';
import { Variedad } from './variedad.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VariedadService {

  //atributos
  formData : Variedad;
  list : Variedad[];
  readonly URL = "https://localhost:44350/api/variedades"
  
  //inyectyo http client
  constructor(private http : HttpClient) { }

  //create variedad
  postVariedad(formData : Variedad){
    return this.http.post(this.URL, formData);
  }

  //lista variedades
  refreshList(){
    this.http.get(this.URL).toPromise().then(
      res => this.list = res as Variedad[]
    );
  }

  //actualizar
  putVariedad(formData : Variedad){
    return this.http.put(this.URL, formData);
  }

  //eliminar
  deleteConfig(ID : number){
    return this.http.delete(this.URL+"/"+ID);
  }
}
