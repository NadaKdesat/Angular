import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.service.getCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }
}
