import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() userData: any = {};
  @Output() updateUser = new EventEmitter<any>();

  editedData: any = {};

  ngOnInit() {
    this.editedData = { ...this.userData }; 
  }

  saveChanges() {
    this.updateUser.emit(this.editedData);
  }

  closePopup() {
    this.updateUser.emit(this.userData); 
  }

}
