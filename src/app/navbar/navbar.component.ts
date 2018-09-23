import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  constructor() { }

  ngOnInit() {
  }

}
