import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//component
import { NotFoundComponent } from './404/not-found.component';




const routes: Routes = [
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
