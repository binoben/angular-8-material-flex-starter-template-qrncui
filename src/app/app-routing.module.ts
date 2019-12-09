import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { BenComponent } from "./ben/ben.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },  
  {
    path: 'test',
    pathMatch: 'full',
    component: TestComponent,
  },
  {
    path: 'ben',
    pathMatch: 'full',
    component: BenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
