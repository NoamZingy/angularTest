import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavBerComponent } from './components/nav-ber/nav-ber.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ActionsFormComponent } from './components/actions-form/actions-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBerComponent,
    ActionsComponent,
    ActionsFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
