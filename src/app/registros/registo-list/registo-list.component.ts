import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/shared/registro.model';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from 'src/app/shared/registro.service';

@Component({
  selector: 'app-registo-list',
  templateUrl: './registo-list.component.html',
  styleUrls: ['./registo-list.component.css']
})
export class RegistoListComponent implements OnInit {

  constructor(
    public service : RegistroService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  //declaro el formulario
  populateForm(V : Registro){
    this.service.formData = V;
  }

  //eliminar si se conirma con el boton que llama la funcion
  onDelete(ID : number){
    if (confirm('Seguro que deseas eliminar?')) {
      this.service.deleteRegistro(ID).subscribe(
        res => {
          this.toastr.warning('Configuración Eliminada','Excelente!');
          this.service.refreshList();
        }
      );
    }
  }
}
