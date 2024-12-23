import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { InicioDashboardComponent } from './dashboard/inicio/inicio.component';
import { GuardUserService } from './services/guard/guard-user.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'iniciar sesion', component: LogInComponent },
  {
    path: 'dashboard/usuario/:userId',
    component: InicioDashboardComponent,
    canActivate: [GuardUserService]
  },
  { path: '**', redirectTo: 'inicio' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
