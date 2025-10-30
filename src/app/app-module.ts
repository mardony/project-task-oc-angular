import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UsersModule } from './users/users-module';
import { PersonalModule } from './personal/personal-module';
import { ProyectosModule } from './proyectos/proyectos-module';
import { AlumnosModule } from './alumnos/alumnos-module';
import { InscripcionesModule } from './inscripciones/inscripciones-module';
import { CursosModule } from './cursos/cursos-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PersonalModule,
    ProyectosModule,
    AlumnosModule,
    InscripcionesModule,
    CursosModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
