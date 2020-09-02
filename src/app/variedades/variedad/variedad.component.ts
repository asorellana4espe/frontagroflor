import { Component, OnInit} from '@angular/core';
import { VariedadService } from 'src/app/shared/variedad.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-variedad',
  templateUrl: './variedad.component.html',
  styleUrls: ['./variedad.component.css']
})

export class VariedadComponent implements OnInit {

  constructor(
    public service : VariedadService,
    private toastr : ToastrService
    ) { }

  ngOnInit(){
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData={
      id : null,
      nombre : '',
      total_matas : 0
    }
  }

  onSubmit(form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form : NgForm){
    if (form.value.id != null) {
      this.service.putVariedad(form.value).subscribe(
        res => { 
          this.resetForm(),
          this.toastr.success('Variedad Guardada','Excelente!'),
          this.service.refreshList()
        }
      );
    }else{
      this.service.postVariedad(form.value).subscribe(
        res => { 
          this.resetForm(),
          this.toastr.success('Variedad Guardada','Excelente!'),
          this.service.refreshList()
        }
      );
    }
    
  }
}
