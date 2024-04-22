import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { GaleriaComponent } from './secciones/galeria/galeria.component';

const routes: Routes = [
  {
    path: "inicio", component: InicioComponent
  },
  {
    path: "galeria", component: GaleriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
