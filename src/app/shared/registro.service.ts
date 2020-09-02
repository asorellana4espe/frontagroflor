import { Registro } from './registro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  formData : Registro;
  list : Registro[];
  readonly URL = "https://localhost:44350/api/registro"

  constructor(private http : HttpClient) { }

  //post para crear
  postRegistro(formData : Registro){
    return this.http.post(this.URL, formData);
  }

  //refrescar lista de registros
  refreshList(){
    this.http.get(this.URL).toPromise().then(
      res => this.list = res as Registro[]
    );
  }

  //actualizar
  putRegistro(formData : Registro){
    return this.http.put(this.URL, formData);
  }

  //eliminar
  deleteRegistro(ID : number){
    return this.http.delete(this.URL+"/"+ID);
  }
}
