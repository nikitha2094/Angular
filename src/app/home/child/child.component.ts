import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    @Input() data;
    language;
    constructor() {

    }

    ngOnInit() {
        this.language = this.data;
        console.log(this.data)
    }
}
