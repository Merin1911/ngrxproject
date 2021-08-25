import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo.reducer';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,StoreModule.forRoot({todos: TodoReducer})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SmsRetriever],
  bootstrap: [AppComponent],
})
export class AppModule {}
