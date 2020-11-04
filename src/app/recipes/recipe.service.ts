import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  recipeSelectd: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'this is a test pasta',
      'https://aht.seriouseats.com/images/2013/11/273327-gordon-ramsay-burgr-top.jpg',
      [new Ingredients('buns', 2), new Ingredients('Meat', 3)]
    ),
    new Recipe(
      'The Jumbo',
      'this is a test pasta',
      'https://www.foodchallenges.com/wp-content/uploads/2020/02/Burgr-Factory-Bossman-Burger-Challenge-Romania.jpg',
      [new Ingredients('Meat', 4), new Ingredients('cheese', 2)]
    ),
  ];

  constructor(private slService: ShoppingService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }
}