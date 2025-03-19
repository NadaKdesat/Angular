import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-get-category',
  standalone: false,
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {
  Categories: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.service.getCategories().subscribe((data) => {
      this.Categories = data;
    })
  }
}
