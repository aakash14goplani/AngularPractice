import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const appRoute: Routes = [
    { path: '',
      component: RecipesComponent,
      canActivate: [AuthGuardService],
      children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
      ]
    },
    { path: '**', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} }
];

@NgModule({
    imports: [ RouterModule.forChild(appRoute) ],
    exports: [ RouterModule ]
})
export class RecipesRoutingModule {}
