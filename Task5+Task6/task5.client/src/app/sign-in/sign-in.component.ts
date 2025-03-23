import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

interface UserData {
  name: string;
  age: string;
  Email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private service: ServiceService, private _route: Router) { }

  isUserRegistered(user: UserData) {
    this.service.getAllUsers().subscribe((allUser) => {
      let User = allUser.find(u => u.Email === user.Email && u.password === user.password);
      if (User) {
        this.service.login(User);
        this._route.navigate(['/']);
      } else {
        alert('Invalid email or password.');
      }
    })
  }
}
