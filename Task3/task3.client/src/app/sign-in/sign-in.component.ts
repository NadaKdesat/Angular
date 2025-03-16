import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private userService: ServiceService, private _route: Router) { }

  onSubmit(data: any) {
    this.userService.SignIn(data).subscribe((users) => {
      const user = users.find(u => u.email === data.Email && u.password === data.password);

      if (user) {
        this._route.navigate(['/']);
      } else {
        alert('Invalid email or password.');
      }
    });
  }
}
