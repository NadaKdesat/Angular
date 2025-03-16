import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private userService: ServiceService, private _route: Router) { }

  onSubmit(data: any) {
    this.userService.SignUp(data).subscribe((result) => {
      console.warn("User added:", result);
      this._route.navigate(['/Login'])
    });

    console.warn("Form Data:", data);
  }
}
