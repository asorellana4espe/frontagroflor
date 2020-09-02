import { Component, OnInit } from '@angular/core';
import { VariedadService } from 'src/app/shared/variedad.service';
import { Variedad } from 'src/app/shared/variedad.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-variedad-list',
  templateUrl: './variedad-list.component.html',
  styleUrls: ['./variedad-list.component.css']
})
export class VariedadListComponent implements OnInit {

  //service para http requests y toastr para notiicaciones
  constructor(
    public service : VariedadService,
    private toastr : ToastrService
    ) { }

  //recargo la lista al iniciar
  ngOnInit(){
    this.service.refreshList();
  }

  //lleno el formulario del service (atributo)
  populateForm(V : Variedad){
    this.service.formData = V;
  }

  //delete en confirmacióin
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
