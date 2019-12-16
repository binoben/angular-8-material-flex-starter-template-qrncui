import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { BenComponent } from "./ben/ben.component";
import { BenMaterialComponent } from "./ben-material/ben-material.component";
import { BenMenuComponent } from "./ben-menu/ben-menu.component";
import { BenMaterial2Component } from "./ben-material-2/ben-material-2.component";

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
  },
  {
    path: "ben-menu",
    pathMatch: "full",
    component: BenMenuComponent
  },
  {
    path: "ben-material-2",
    pathMatch: "full",
    component: BenMaterial2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
