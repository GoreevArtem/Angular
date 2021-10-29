import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationsComponent} from './registrations/registrations.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationsComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [
    AuthRoutingModule
  ]
})
export class AuthModule {
}
