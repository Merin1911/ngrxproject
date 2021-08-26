import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundProgressbarPage } from './round-progressbar.page';

const routes: Routes = [
  {
    path: '',
    component: RoundProgressbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundProgressbarPageRoutingModule {}
