import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './contact.routing';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [

        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        ContactComponent,
    ],
    providers: [
    ]
})
export class ContactModule { }
