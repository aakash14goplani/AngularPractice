import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-alert-element',
    template: `
        <div class="row">
            <div class="col-sm-12">
                This is an alert. {{ message }}
            </div>
        </div>`,
    styles: [`
        div {
            border: 1px solid black;
            background: salmon;
            padding: 10px;
            font-family: sans-sarif;
            text-align: center;
        }
    `]
})
export class CustomAlertElementComponent {

    @Input() message: string = '';
}
