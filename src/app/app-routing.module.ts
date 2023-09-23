import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { AddInsuranceComponent } from './pages/add-insurance/add-insurance.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
  , {
    path: "",
    component: LayoutComponent,
    children: [{
      path: "insurance",
      component: InsuranceComponent,
    },
    {
      path: "insurance/:id",
      component: InsuranceComponent,
    },
    {
      path: "addinsurance",
      component: AddInsuranceComponent,
    },
    {
      path: "addinsurance/id",
      component: AddInsuranceComponent,
    }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
