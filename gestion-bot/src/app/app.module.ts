import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NavWsComponent } from './components/nav-ws/nav-ws.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioDashboardComponent } from './dashboard/inicio/inicio.component';
import { PagosComponent } from './dashboard/pagos/pagos.component';
import { InteraccionesComponent } from './dashboard/interacciones/interacciones.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LogInComponent,
    NavWsComponent,
    NavDashboardComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    InicioDashboardComponent,
    PagosComponent,
    InteraccionesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
