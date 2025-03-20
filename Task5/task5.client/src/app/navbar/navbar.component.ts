import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private service: ServiceService) { }
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.service.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status; 
    });
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/Login']);
  }
}
