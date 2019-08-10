import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers: [UserService, CounterService]
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
