import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
  styles: [`.headerLogo { padding-top: 10px;
    padding-right: 2px;}`]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  homeView() {
    this.router.navigate(['/dashboard']);
  }

}
