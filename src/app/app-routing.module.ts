import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { FloricolasComponent } from './floricolas/floricolas.component';
import { RegistrosComponent } from './registros/registros.component';
import { VariedadesComponent } from './variedades/variedades.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'config', component: ConfigComponent,
  },
  {
    path: 'floricola', component: FloricolasComponent,
  },
  {
    path: 'registros', component: RegistrosComponent,
  },
  {
    path: 'variedades', component: VariedadesComponent,
  },
  {
    path: 'reportes', component: ReportesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
