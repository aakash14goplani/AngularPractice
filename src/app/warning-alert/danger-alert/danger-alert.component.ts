import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danger-alert',
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent implements OnInit {

  constructor() { }

  childMessage: string = 'DANGER!!!';

  /* Receiving  input properties from parent via @Input() */
  @Input() messageFromParent: string;

  /* Receiving  input properties from parent via @ViewChild() */
  // @Input() messageFromParent: string;

  ngOnInit() {
  }

}
