import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements AfterViewChecked, OnInit {

  genders: string[] = ['male', 'female', 'others'];
  nationalityArray = [
    {id: 0, name: 'indian'},
    {id: 1, name: 'american'},
    {id: 2, name: 'african'}
  ];
  signupForm: FormGroup;
  @ViewChild('form', {static: false}) formData: NgForm;
  forbiddenUserNames: string[] = ['Aakash', 'Goplani'];

  constructor() {  }

  ngAfterViewChecked(): void {
    this.addCheckboxes();
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      gender: new FormControl('male'),
      /*
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      */
      hobbies: new FormArray([]),
      nationality: new FormArray([])
    });

    this.signupForm.get('userData.username').valueChanges.subscribe(
      (value) => {
        console.log('username value changed: ', value);
      }
    );

    this.signupForm.get('userData.email').statusChanges.subscribe(
      (status) => {
        console.log('email status changed: ', status);
      }
    );

    this.signupForm.setValue({
      userData: {
        username: 'Aakash',
        email: 'goplaniaakash14@gmail.com'
      },
      gender: 'male',
      hobbies: ['cooking'],
      nationality: []
    });

    (this.signupForm.get('hobbies') as FormArray).patchValue(['Aakash', 'Goplani']);
  }

  onHobby(): void {
    const checkboxControl = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(checkboxControl);
  }

  get controls(): AbstractControl[] {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  addCheckboxes(): void {
    this.nationalityArray.map((value, index) => {
      const checkboxControl = new FormControl(null);
      (this.signupForm.get('nationality') as FormArray).push(checkboxControl);
    });
    /*
      http://marcusresell.com/2018/07/18/dynamic-checkbox-angular/
      https://medium.com/xebia-engineering/multi-checkbox-form-control-angular7-39cbdabede57
      https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
      https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21
    */
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      // tslint:disable-next-line: object-literal-key-quotes
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'goplaniaakash14@gmail.com') {
          // tslint:disable-next-line: object-literal-key-quotes
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  onSubmit(): void {
    console.log('signupForm: ', this.signupForm);
    console.log('ngForm: ', this.formData);
    this.signupForm.reset();
  }

}
