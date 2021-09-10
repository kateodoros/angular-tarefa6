import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { TemporizadorService } from './temporizador.service';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasService } from './disciplinas.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'temporizador', component: TemporizadorComponent },
      { path: 'disciplinas', component: DisciplinasComponent }
    ])
   ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    TemporizadorComponent,
    DisciplinasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TemporizadorService, DisciplinasService ]
})
export class AppModule { }
