import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

interface CategoryData {
  name: string;
  img: string;
}

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  categoryData: any
  categoryId: any

  constructor(private service: ServiceService, private _active: ActivatedRoute) {}
  
  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this.service.getCategoryByCategoryId(this.categoryId).subscribe((data) => {
      this.categoryData = data;
    })
  }
 
  editCategory(data: CategoryData) {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this.service.editCategory(data, this.categoryId).subscribe(() => {
       alert("update Successfully")
    })

  }
}
