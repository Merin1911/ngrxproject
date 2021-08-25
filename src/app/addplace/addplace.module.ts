import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplacePageRoutingModule } from './addplace-routing.module';

import { AddplacePage } from './addplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplacePageRoutingModule
  ],
  declarations: [AddplacePage]
})
export class AddplacePageModule {}
