import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './appRouting.module';
import { UserCardsComponent } from './shared/component/user-cards/user-cards.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { ProductCardsComponent } from './shared/component/product-cards/product-cards.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    UserDashboardComponent,
    UserFormComponent,
    ProductCardsComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    GetConfirmComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
