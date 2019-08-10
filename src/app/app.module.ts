import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NestedServersComponent } from './nested-servers/nested-servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AdvancedComponentsComponent } from './advanced-components/advanced-components.component';
import { OuterComponentComponent } from './advanced-components/outer-component/outer-component.component';
import { InnerComponentComponent } from './advanced-components/inner-component/inner-component.component';
import { DangerAlertComponent } from './warning-alert/danger-alert/danger-alert.component';
import { GameControlComponent } from './advanced-components/game-control/game-control.component';
import { OddComponent } from './advanced-components/game-control/odd/odd.component';
import { EvenComponent } from './advanced-components/game-control/even/even.component';
import { BasicHighlightDirective } from './advanced-directives/basic-highlight/basic-highlight.directive';
import { BatterHighlightDirective } from './advanced-directives/better-highlight/batter-highlight.directive';
import { AdvancedDirectivesComponent } from './advanced-directives/advanced-directives.component';
import { OddGeneratorDirective } from './advanced-directives/odd-generator/odd-generator.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AssignmentComponent } from './services/assignment/assignment.component';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveUsersComponent } from './services/assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services/assignment/inactive-users/inactive-users.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NestedServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AdvancedComponentsComponent,
    OuterComponentComponent,
    InnerComponentComponent,
    DangerAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    AdvancedDirectivesComponent,
    BatterHighlightDirective,
    OddGeneratorDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,

    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
