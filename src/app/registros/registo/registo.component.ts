import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/shared/registro.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  constructor(
    public service: RegistroService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData={
      id : null,
      variedad_id : 0,
      floricola_id : 1,
      fecha : '',
      bonche_med : '',
      precio_tall_exp : 0,
      tall_nacional : 0,
      total_tallos : 0,
      precio_nac : 0,
    };
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    if (form.value.id != null) {
      this.service.putRegistro(form.value).subscribe(
        res => {
          this.resetForm(),
          this.toastr.success('Registro Guardado','Excelente!'),
          this.service.refreshList()
        }
      );
    }else{
      this.service.postRegistro(form.value).subscribe(
        res => {
          this.resetForm(),
          this.toastr.success('Registro Creado','Excelente!'),
          this.service.refreshList()
        }
      );
    }
  }
}
