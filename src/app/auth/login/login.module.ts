import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { myTestAppLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        myTestAppLayoutModule,
    ],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule { }
