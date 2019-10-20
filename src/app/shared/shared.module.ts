import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertSharedComponent } from './alert-shared/alert-shared.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AlertSharedComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertSharedComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        PageNotFoundComponent,
        CommonModule
    ],
    entryComponents: [AlertSharedComponent]
})
export class SharedModule {}
