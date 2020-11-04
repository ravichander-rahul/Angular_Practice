import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingService {
  ingredientsChanged: EventEmitter<Ingredients[]> = new EventEmitter<
    Ingredients[]
  >();

  ingredients: Ingredients[] = [
    new Ingredients('apples', 4),
    new Ingredients('Tomatoes', 6),
  ];

  getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
