import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'this is a test pasta',
      'https://c.ndtvimg.com/2020-02/vpm8qseg_kebab_625x300_11_February_20.jpg'
    ),
    new Recipe(
      'Pasta',
      'this is a test pasta',
      'https://c.ndtvimg.com/2020-02/vpm8qseg_kebab_625x300_11_February_20.jpg'
    ),
  ];
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
