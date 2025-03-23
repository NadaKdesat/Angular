import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;
  productId: any;
  constructor(private route: ActivatedRoute,private service: ServiceService) { }

  ngOnInit(): void {
      this.fetchProductById();
  }

  fetchProductById() {
    this.productId = this.route.snapshot.paramMap.get('id'); 
    this.service.getProductByProductId(this.productId).subscribe((data) => {
      this.product = data;
    })
  }
}
