import { Component, OnInit } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Array<Ingredient> = Array(
    new Ingredient("farine", 12), 
    new Ingredient("tomates", 4) 
  );
  constructor() { }

  ngOnInit() {
  }

}
