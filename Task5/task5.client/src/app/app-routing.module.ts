import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';

const routes: Routes = [
  { path: "Product/:id", component: ProductComponent },
  { path: "ProductDetails/:id", component: ProductDetailsComponent },
  { path: "Categories", component: CategoriesComponent },
  {
    path: "Dashboard", component: DashboardComponent, children: [
      { path: "getCategory", component: GetCategoryComponent },
      { path: "getProduct", component: GetProductComponent },
      { path: "addCategory", component: AddCategoryComponent },
      { path: "addProduct", component: AddProductComponent },
      { path: "editCategory/:id", component: EditCategoryComponent },
      { path: "editProduct/:id", component: EditProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
