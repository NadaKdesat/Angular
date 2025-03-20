import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData: any;
  isEditPopupOpen = false;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    const storedUser = localStorage.getItem("User");
    if (storedUser) {
      this.userData = JSON.parse(storedUser);
    } else {
      console.log("No user data found in localStorage");
    }
  }

  openEditPopup() {
    this.isEditPopupOpen = true;
  }

  closeEditPopup() {
    this.isEditPopupOpen = false;
  }

  updateUserData(updatedUser: any) {
    this.userData = updatedUser;

    localStorage.setItem('User', JSON.stringify(this.userData));

    this.service.updateUserProfile(this.userData).subscribe(response => {
      console.log("User updated successfully in API", response);
    }, error => {
      console.error("Error updating user in API", error);
    });

    this.closeEditPopup();
  }


}
