import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { ListarDatosPersonalesComponent } from './components/listar-datos-personales/listar-datos-personales.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  {path:'',component:ListarComentariosComponent},
  {path:'datos',component:ListarDatosPersonalesComponent},

  {path:'add',component:AgregarEditarComentarioComponent},
  {path:'busqueda',component:BusquedasComponent},
  {path:'editar/:id',component:AgregarEditarComentarioComponent},
  {path:'ver/:id',component:VerComentariosComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
