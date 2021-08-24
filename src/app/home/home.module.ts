import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoComponent } from '../components/todo/todo.component';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,TodoComponent,AddTodoComponent]
})
export class HomePageModule {}
