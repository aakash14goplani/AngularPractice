import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { UserAuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        RecipeService,
        ShoppingListService,
        DataStorageService,
        RecipesResolverService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UserAuthInterceptorService,
            multi: true
        }
    ]
})
export class CoreModule {}
