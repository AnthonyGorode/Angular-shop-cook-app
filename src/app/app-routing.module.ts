import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { FourToFourComponent } from './components/errors/four-to-four/four-to-four.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', pathMatch: 'full', redirectTo: 'recipes' },
  { path: '**', component: FourToFourComponent }
];

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    FourToFourComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
