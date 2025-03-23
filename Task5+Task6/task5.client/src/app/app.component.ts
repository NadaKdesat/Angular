import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  showNavbar: boolean = true;
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = !(
        this.router.url.includes('/Dashboard') ||
        this.router.url.includes('/Dashboard/addProduct') ||
        this.router.url.includes('/Dashboard/addCategory') ||
        this.router.url.includes('/Dashboard/getProduct') ||
        this.router.url.includes('/Dashboard/getCategory') ||
        this.router.url.includes('/Dashboard/editCategory') ||
        this.router.url.includes('/Dashboard/editProduct')
      );
    });
  }

}
