import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {

  projectForm: FormGroup;
  forbiddenNameList: string[] = ['Test'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project-name': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'project-mail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailName),
      'project-status': new FormControl(null)
    });
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    const formValue = (control.value === null) ? '' : control.value.toLowerCase();

    if (this.forbiddenNameList.map((value) => value.toLowerCase()).indexOf(formValue) !== -1) {
      // tslint:disable-next-line: object-literal-key-quotes
      return {'invalidProjectName': true};
    }
    return null;
  }

  forbiddenEmailName(control: FormControl): Promise<any> | Observable<any> {
    const formValue = (control.value === null) ? '' : control.value.toLowerCase();
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formValue === 'test@test.test' || formValue === 'test@test.com') {
          // tslint:disable-next-line: object-literal-key-quotes
          resolve({'invalidEmail': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

}
