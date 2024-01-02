import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from '../private.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: ':id',
        component: DetailsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
