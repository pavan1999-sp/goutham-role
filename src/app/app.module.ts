import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './sharedModule/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotComponent } from './components/pagenot/pagenot.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ContactsComponent,
    ServicesComponent,
    LoginComponent,
    PagenotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,SharedModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
