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
  productId: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
      this.fetchProductById();
  }

  fetchProductById() {
    this.productId = this.route.snapshot.paramMap.get('id'); 
    this.apiService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
