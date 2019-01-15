
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './auth/guards/auth.guard';

import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';


import { HomeModule } from './home/home.module';

// Core providers
import { myTestAppLayoutModule } from "./shared/layout/layout.module";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,

    FormsModule,
    HttpModule,
    myTestAppLayoutModule,
    routing
  ],
  exports: [
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule {
}

















// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// /**
//  * FOR FORM VALIDATIONS
//  */
// import { FormsModule } from '@angular/forms';
// //Rouitng between pages
// import { routing } from './app.routing'

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     routing
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


