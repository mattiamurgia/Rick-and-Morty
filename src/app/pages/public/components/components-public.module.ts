import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPublicRoutingModule } from './components-public-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ComponentsPublicRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
})
export class ComponentsPublicModule {}
