import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

}
