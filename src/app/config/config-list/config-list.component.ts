import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/shared/config.model';
import { ConfigService } from 'src/app/shared/config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {

  //inyectar el servicio para http request y toastr para notificaciones
  constructor(
    public service : ConfigService,
    private toastr : ToastrService
    ) { }

  //al iniciar refresco la lista
  ngOnInit(){
    this.service.refreshList();
  }

  //declaro el formulario
  populateForm(V : config){
    this.service.formData = V;
  }

  //eliminar si se conirma con el boton que llama la funcion
  onDelete(ID : number){
    if (confirm('Seguro que deseas eliminar?')) {
      this.service.deleteConfig(ID).subscribe(
        res => { 
          this.toastr.warning('Configuración Eliminada','Excelente!');
          this.service.refreshList();
        }
      );
    }
  }
}
