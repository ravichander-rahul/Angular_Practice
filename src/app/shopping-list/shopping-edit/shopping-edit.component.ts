import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) ingredientName: ElementRef;
  @ViewChild('inputAmount', { static: true }) ingredientAmount: ElementRef;
  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredients(ingName, ingAmount);
    this.slService.addIngredient(ingredient);
  }
}
