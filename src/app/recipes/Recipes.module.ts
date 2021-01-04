import { SharedModule } from './../shared/shared-module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations:[
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports:[
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipeModule{

}
