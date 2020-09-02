import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { VariedadesComponent } from './variedades/variedades.component';
import { FloricolasComponent } from './floricolas/floricolas.component';
import { RegistrosComponent } from './registros/registros.component';
import { RegistoComponent } from './registros/registo/registo.component';
import { RegistoListComponent } from './registros/registo-list/registo-list.component';
import { FloricolaComponent } from './floricolas/floricola/floricola.component';
import { FloricolaListComponent } from './floricolas/floricola-list/floricola-list.component';
import { VariedadComponent } from './variedades/variedad/variedad.component';
import { VariedadListComponent } from './variedades/variedad-list/variedad-list.component';
import { ConfigListComponent } from './config/config-list/config-list.component';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfigService} from './shared/config.service';
import { VariedadService } from './shared/variedad.service';
import { FloricolaService } from './shared/floricola.service';
import { RegistroService } from './shared/registro.service';
import { ConfComponent } from './config/conf/conf.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    VariedadesComponent,
    FloricolasComponent,
    RegistrosComponent,
    RegistoComponent,
    RegistoListComponent,
    FloricolaComponent,
    FloricolaListComponent,
    VariedadComponent,
    VariedadListComponent,
    ConfigListComponent,
    HomeComponent,
    ReportesComponent,
    ConfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    RegistroService,
    VariedadService,
    ToastrModule,
    FloricolaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
