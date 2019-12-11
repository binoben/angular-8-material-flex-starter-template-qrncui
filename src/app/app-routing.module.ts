import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { BenComponent } from "./ben/ben.component";
import { BenMaterialComponent } from "./ben-material/ben-material.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "test",
    pathMatch: "full",
    component: TestComponent
  },
  {
    path: "ben",
    pathMatch: "full",
    component: BenComponent
  },
  {
    path: "ben-material",
    pathMatch: "full",
    component: BenMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
