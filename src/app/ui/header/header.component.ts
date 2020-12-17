import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuShow = false;
  toggleNavbar(): void {
    this.menuShow = !this.menuShow;
  }
}
