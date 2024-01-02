import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from '../private.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ComponentsPrivateModule } from '../components/components-private.module';
import { DetailsPageComponent } from '../details-page/details-page.component';

@NgModule({
  declarations: [PrivateComponent, HomePageComponent, DetailsPageComponent],
  imports: [CommonModule, PrivateRoutingModule, ComponentsPrivateModule],
})
export class PrivateModule {}
