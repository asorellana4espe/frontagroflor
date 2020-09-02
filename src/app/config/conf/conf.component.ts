import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/config.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.css'],
})
export class ConfComponent implements OnInit {
  constructor(
    public service: ConfigService,
    private toastr : ToastrService
    ) {}
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData={
      id : null,
      medidas : '',
      tallos_bonche : 0
    };
  }
  onSubmit(form : NgForm){
    this.insertRecord(form);
  }
  insertRecord(form : NgForm){
    if (form.value.id != null) {
      this.service.putConfig(form.value).subscribe(
        res => {
          this.resetForm(),
          this.toastr.success('Configuración Guardada','Excelente!'),
          this.service.refreshList()
        }
      );
    }else{
      this.service.postConfig(form.value).subscribe(
        res => {
          this.resetForm(),
          this.toastr.success('Configuración Creada','Excelente!'),
          this.service.refreshList()
        }
      );
    }
  }

}
