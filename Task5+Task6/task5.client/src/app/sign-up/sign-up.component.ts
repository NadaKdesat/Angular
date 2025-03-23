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
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private service: ServiceService,private _route :Router) { }

  addUser(user: UserData) {
    this.service.addNewUser(user).subscribe((newUser) => {
      console.warn("User added:", newUser);
      this._route.navigate(['/Login'])
    })
  }
}
