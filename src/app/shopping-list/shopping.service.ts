import { Ingredients } from '../shared/ingredients.model';
import {Subject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ShoppingService {
  ingredientsChanged: Subject<Ingredients[]> = new Subject<
    Ingredients[]
  >();
  startedEditing=new Subject<number>();

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

  getIngredient(index:number){
    return this.ingredients[index];
  }

  updateIngredient(index:number,updatedIngredient:Ingredients){
    this.ingredients[index]=updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
