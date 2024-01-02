import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from '../login/login.component';
import { PublicComponent } from '../public.component';
import { ComponentsPublicModule } from '../components/components-public.module';

@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [PublicRoutingModule, ComponentsPublicModule],
})
export class PublicModule {}
