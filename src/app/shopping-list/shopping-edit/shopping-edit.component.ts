import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredients;

  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {
  this.subscription=this.slService.startedEditing.subscribe((index)=>{
    this.editedItemIndex=index;
    this.editMode=true;
    this.editedItem=this.slService.getIngredient(index);
    this.slForm.setValue({
      name:this.editedItem.name,
      amount:this.editedItem.amount
    })
    })
  }

  onSubmit(form:NgForm) {
    const value=form.value;
    const ingredient = new Ingredients(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,ingredient);
    }else{this.slService.addIngredient(ingredient);}
    this.editMode=false;
    form.reset();
  }


  clearForm(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
