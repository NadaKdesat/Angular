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
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.apiService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
