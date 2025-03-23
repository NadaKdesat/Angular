import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

interface productData {
  name: string;
  avatar: string;
  categoryId: string;
}

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent {
  categories: any;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  addProduct(product: productData) {
    this.service.setProduct(product).subscribe((result) => {
      console.warn("Category added:", result);
      alert("Product has been added successfully!");
    })
  }
}
