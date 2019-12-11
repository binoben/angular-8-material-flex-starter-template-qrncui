import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { BenComponent } from "./ben/ben.component";
import { BenMaterialComponent } from "./ben-material/ben-material.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,

    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent, TestComponent, BenComponent, BenMaterialComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
