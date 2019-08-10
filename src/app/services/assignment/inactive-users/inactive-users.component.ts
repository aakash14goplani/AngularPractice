import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private userService: UserService, private counter: CounterService) { }

  inactiverUsersArray: string[];
  totalNumberOfUsersAdded: number = 0;

  ngOnInit() {
    this.inactiverUsersArray = this.userService.inactiveUsers;
  }

  addUser(userName: string) {
    this.userService.inactiveToActive(userName);
    this.counter.usersAdded();
    this.totalNumberOfUsersAdded = this.counter.totalNumberOfUsersAdded;
  }

}
