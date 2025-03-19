import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any[]=[];
  categoryId: any;
  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.fetchProductsById();
  }

  fetchProductsById() {
    this.categoryId = this.route.snapshot.paramMap.get("id");
    this.service.getProductsByCategoryId(this.categoryId).subscribe((data) => {
      this.product = data;
    })
  }


}
