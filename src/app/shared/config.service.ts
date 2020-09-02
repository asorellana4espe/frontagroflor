import { Injectable } from '@angular/core';
import { config } from './config.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //atributos
  formData : config;
  list : config[];
  readonly URL = "https://localhost:44350/api/config";
  //inyecto httpclient
  constructor(private http : HttpClient) { }
  //post para crear
  postConfig(formData : config){
    return this.http.post(this.URL, formData);
  }
  //refrescar lista de configs
  refreshList(){
    this.http.get(this.URL).toPromise().then(
      res => this.list = res as config[]
    );
  }
  //actualizar
  putConfig(formData : config){
    return this.http.put(this.URL, formData);
  }
  //eliminar
  deleteConfig(ID : number){
    return this.http.delete(this.URL+"/"+ID);
  }
}
