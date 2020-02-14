import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path: 'form', component: FormularioComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
