import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() signout = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  logout() {
    this.signout.emit();
  }
}
