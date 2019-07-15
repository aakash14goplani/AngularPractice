import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  template: '<h4>This is a Success Message</h4>',
  styles: ['h4 { color: green; }']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
