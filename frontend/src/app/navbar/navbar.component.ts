import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Reservation', link: '/reservation' },
    { name: 'Contact', link: '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
