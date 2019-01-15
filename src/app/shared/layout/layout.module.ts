import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { MainLayoutComponent } from './app-layout/main-layout.component';
import { AuthLayoutComponent } from './app-layout/auth-layout.component';
import { RouterModule } from "@angular/router";
import { HeaderModule } from "./header/header.module";
import { FooterComponent } from "./footer/footer.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule
  ],
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    FooterComponent
  ],
  exports: [
    HeaderModule,
    FooterComponent,
  ]
})
export class myTestAppLayoutModule {

}
