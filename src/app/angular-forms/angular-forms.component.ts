import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  @ViewChild('form') formData: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  games: string[] = ['indoor', 'outdoor', 'not interested'];
  defaultGame: string = 'outdoor';
  submitted: boolean = false;
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    game: ''
  };

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Aakash Goplani';
    console.log('suggestedName');
    /* this.formData.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: '',
      questionAnswer: 'Your answer goes here...',
      game: 'indoor'
    }); */
    this.formData.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  /* onSubmit(event: NgForm): void {
    console.log('success: ', event);
  } */

  onSubmit(): void {
    console.log('success: ', this.formData);
    this.submitted = true;

    this.user.username = this.formData.value.userData.username;
    this.user.email = this.formData.value.userData.email;
    this.user.secret = this.formData.value.secret;
    this.user.questionAnswer = this.formData.value.questionAnswer;
    this.user.game = this.formData.value.game;

    this.formData.reset();
  }

}
