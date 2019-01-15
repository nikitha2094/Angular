
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './profile.routing';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        ProfileComponent,
    ],
    providers: [
    ]
})
export class ProfileModule { }
