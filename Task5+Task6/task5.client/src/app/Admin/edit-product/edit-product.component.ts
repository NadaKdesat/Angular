import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

interface ProductData {
  name: string;
  avatar: string;
  categoryId: string;
}

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  productData: any;
  productId: any;
  categories: any;

  constructor(private service: ServiceService, private _active:ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
    this.fetchCategories();
  }

  getProduct() {
    this.productId = this._active.snapshot.paramMap.get("id");
    this.service.getProductByProductId(this.productId).subscribe((data) => {
      this.productData = data;
    })
  }

  fetchCategories() {
    this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  editProduct(data: ProductData) {
    this.productId = this._active.snapshot.paramMap.get("id");
    this.service.editProduct(data,this.productId).subscribe(() => {
      alert("update Successfully")
    })
  }
}
