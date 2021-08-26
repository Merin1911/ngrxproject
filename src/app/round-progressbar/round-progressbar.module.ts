import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundProgressbarPageRoutingModule } from './round-progressbar-routing.module';

import { RoundProgressbarPage } from './round-progressbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundProgressbarPageRoutingModule
  ],
  declarations: [RoundProgressbarPage]
})
export class RoundProgressbarPageModule {}
