import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form-assignment',
  templateUrl: './td-form-assignment.component.html',
  styleUrls: ['./td-form-assignment.component.css']
})
export class TdFormAssignmentComponent implements OnInit {

  subscription: string[] = ['Basic', 'Advance', 'PRO'];
  defaultSubscription: string = 'Basic';
  @ViewChild('form', {static: false}) formData: NgForm;
  formSubmitted: boolean = false;
  assignment = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() { }

  ngOnInit() { }

  onSubmit(): void {
    console.log('formData: ', this.formData);
    this.formSubmitted = true;

    this.assignment.email = this.formData.value.email;
    this.assignment.subscription = this.formData.value.subscription;
    this.assignment.password = this.formData.value.password;
  }

  onReset(): void {
    this.formData.reset();
  }

}
