import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './home.routing';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component'
import { ParentComponent } from './parent/parent.component'
@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        HomeComponent,
        ChildComponent,
        ParentComponent
    ],
    providers: [
    ]
})
export class HomeModule { }
