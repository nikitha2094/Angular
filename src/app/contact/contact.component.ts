import { Component } from '@angular/core';
import { ContactService } from './services/contact.service'
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent {

    public score: any;
    public totalScore: any;
    constructor() {
        this.score = 0;
        this.totalScore = 20;
    }

    answerSubmit() {
        this.score++;
    }
}



