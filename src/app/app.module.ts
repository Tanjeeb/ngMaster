import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

export const firebaseConfig={
  apiKey: "AIzaSyCVAJOfZDaTSewkZVp7Ozja6fFgYXBESus",
  authDomain: "ngtest-d2cb9.firebaseapp.com",
  databaseURL: "https://ngtest-d2cb9.firebaseio.com",
  projectId: "ngtest-d2cb9",
  storageBucket: "ngtest-d2cb9.appspot.com",
  messagingSenderId: "1050350470327"
};



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
