import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComorbiditiesPage } from './comorbidities.page';

const routes: Routes = [
  {
    path: '',
    component: ComorbiditiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComorbiditiesPageRoutingModule {}
