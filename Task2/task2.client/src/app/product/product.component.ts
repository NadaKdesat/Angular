import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any[]=[];
  categoryId: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    //const categoryId = this.route.snapshot.paramMap.get('id');
    //if (categoryId) {
    //  this.fetchProductsById(categoryId);
    //}
    this.fetchProductsById();
  }

  //fetchProductsById(categoryId: string) {
  //  this.apiService.getProductsByCategory(categoryId).subscribe(
  //    (data) => {
  //      this.product = data || [];
  //    },
  //    (error) => {
  //      this.product = [];
  //    }
  //  );
  //}


  fetchProductsById() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    this.apiService.getProductsByCategory(this.categoryId).subscribe((data) => {

      this.product = data.filter((x: any) => x.categoryId == this.categoryId)

    })
  }


}
