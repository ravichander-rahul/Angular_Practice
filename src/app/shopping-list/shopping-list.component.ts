import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredients[];
  idChanged:Subscription;


  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.idChanged= this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.idChanged.unsubscribe();
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

}
