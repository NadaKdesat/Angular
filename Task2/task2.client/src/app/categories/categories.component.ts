import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.apiService.getAllUsers().subscribe(
      (data) => {
        this.categories = data;
        console.log('All Users:', this.categories);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
