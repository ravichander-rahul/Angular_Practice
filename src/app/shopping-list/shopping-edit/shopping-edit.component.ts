import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  ElementRef,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) ingredientName: ElementRef;
  @ViewChild('inputAmount', { static: true }) ingredientAmount: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredients> = new EventEmitter<
    Ingredients
  >();
  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new Ingredients(ingName, ingAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
