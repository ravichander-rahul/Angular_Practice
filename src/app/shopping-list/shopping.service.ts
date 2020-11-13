import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import {Subject} from 'rxjs';

export class ShoppingService {
  ingredientsChanged: Subject<Ingredients[]> = new Subject<
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
