import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  list = [
    {
      route: 'dashboard',
      name: 'Home',
    },
    {
      route: 'howitworks',
      name: 'How It Worksss',
    },
    {
      route: 'quotation',
      name: 'Quotation',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
