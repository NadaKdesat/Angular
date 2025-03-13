import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Categories', component: CategoriesComponent }, 
  { path: 'Product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
