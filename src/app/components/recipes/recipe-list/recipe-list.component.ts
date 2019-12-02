import { Component, OnInit } from '@angular/core';
import Recipe from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe("Tarte au boeuf", "Une recette d'origine suédoise", "https://static.cuisineaz.com/400x320/i138659-tarte-au-boeuf-tomates-courgettes-et-fromage.jpeg"),
    new Recipe("Sauce Tartare", "Une sauce qui titille les papilles", "https://www.papillesetpupilles.fr/wp-content/uploads/2015/04/Sauce-tartare-600x400.jpg"),
    new Recipe("Lasagne au boeuf", "Un mélange de bonne chose", "https://az826390.vo.msecnd.net/cdn/media/home/inspiring_recipes/recipes/new_-_l/recettes-lasagne-au-boeuf-et-aux-champignons-bs009996-1160x650-pub-71375.ashx?la=fr&mw=1160&w=1160&hash=D719B46E4BA4D5A2532DC1A69944EC1145C7EEBE")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
