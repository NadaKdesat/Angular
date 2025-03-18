import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-product',
  standalone: false,
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {
  Products: any;
  categoryId: any;
  constructor(private service: ServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.service.getProducts().subscribe((data) => {
      this.Products = data;
    })

    //this.categoryId = this.route.snapshot.paramMap.get("id");
    //this.service.getProductsByCategoryId(this.categoryId).subscribe((data) => {
    //  this.Products = data;
    //})

    //this.service.getProductsByCategoryId(this.categoryId).subscribe((data) => {
    //  this.Products = data.filter((x: any) => x.categoryId == this.categoryId);
    //})
  }
}
