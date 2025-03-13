import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); 
    if (productId) {
      this.fetchProductById(productId);
    }
  }

  fetchProductById(id: string) {
    this.apiService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
        console.log('Product Details:', this.product);
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
