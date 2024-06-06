import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component'; // Importa el componente de listar categorías
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component'; // Importa el componente de crear categorías

const routes: Routes = [
  { path: '', component: ListarProductosComponent, pathMatch: 'full' },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'listar-categoria', component: ListarCategoriaComponent }, // Agrega la ruta para listar categorías
  { path: 'crear-categoria', component: CrearCategoriaComponent }, // Agrega la ruta para crear categorías
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
