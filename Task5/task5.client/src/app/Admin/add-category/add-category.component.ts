import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

interface CategoryData {
  name: string;
  img: string;
}

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent {
  constructor(private service: ServiceService) { }

  addCategory(category: CategoryData) {
    this.service.setCategory(category).subscribe((result) => {
      console.warn("Category added:", result);
      alert("Category has been added successfully!");
    })
  }
}
