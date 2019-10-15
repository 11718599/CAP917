import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component'
import {Twbcomponent} from './twb.component'
import { drdvClass} from './drdv.component'
import {StlComponent} from './stl.component'
import {NComponent} from './ngl.component'
import {BankAccount} from './inpt1.component'
import {App} from './inpt1.component'
import {Bootstrap} from './btstrp.component'
@NgModule({
  declarations: [
    AppComponent,
	Twbcomponent,
	drdvClass,
	StlComponent,
	NComponent,
	BankAccount,
	App,
	Bootstrap,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
