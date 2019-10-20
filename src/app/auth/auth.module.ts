import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: AuthComponent },
            { path: '**', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} }
        ])
    ]
})
export class AuthModule {}
