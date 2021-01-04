import { SharedModule } from './shared/shared-module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RecipeModule } from './recipes/Recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    RecipeModule,
    ShoppingListModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
