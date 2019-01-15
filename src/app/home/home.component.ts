import { Component } from '@angular/core';
//Form Validtions
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    dataToTable = [];
    myFriend: String;
    placeholderText;
    value;

    Employees = [
        {
            "jobTitleName": "Developer",
            "firstName": "Ravi",
            "lastName": "Suryan",
            "FullName": "Ravi Suryan",
            "phoneNumber": "8374895624",
            "emailAddress": "ravi@gmail.com"
        },
        {
            "jobTitleName": "Developer",
            "firstName": "Ramu",
            "lastName": "Somthing",
            "FullName": "Ramu Something",
            "phoneNumber": "7984561237",
            "emailAddress": "ramu@gmail.com"
        },
        {
            "jobTitleName": "Developer",
            "firstName": "Sai",
            "lastName": "Santhosh",
            "FullName": "Sai Santhosh",
            "phoneNumber": "7946133232",
            "emailAddress": "sai@gmail.com"
        },
        {
            "jobTitleName": "Developer",
            "firstName": "Sai",
            "lastName": "Santhosh",
            "FullName": "Harish Kesari",
            "phoneNumber": "7946133232",
            "emailAddress": "sai@gmail.com"
        },
        {
            "jobTitleName": "Developer",
            "firstName": "Sai",
            "lastName": "Santhosh",
            "FullName": "Abhishekh Mittal",
            "phoneNumber": "7946133232",
            "emailAddress": "sai@gmail.com"
        },
        {
            "jobTitleName": "Developer",
            "firstName": "Sai",
            "lastName": "Santhosh",
            "FullName": "Koushik Velishala",
            "phoneNumber": "7946133232",
            "emailAddress": "sai@gmail.com"
        }
    ];

    constructor() {
    }

    ngOnInit() {
        for (let j = 0; j < this.Employees.length; j++) {
            this.dataToTable.push(this.Employees[j]);
        }
    }

    globalSearch(event) {
        this.value = event.target.value;
        this.myFriend = this.value;
        this.dataToTable = JSON.parse(JSON.stringify(this.Employees));
        this.dataToTable = this.dataToTable.filter(employee => {
            if (employee.FullName.toLowerCase().indexOf(this.value.toLowerCase()) !== -1) {
                return true;
            }
        })
    }
}
