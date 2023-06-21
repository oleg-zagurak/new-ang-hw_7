import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <a [routerLink]="'/blog'" class="link">Blog</a>
      <a [routerLink]="'/admin/blogs'" class="link">Admin</a>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
