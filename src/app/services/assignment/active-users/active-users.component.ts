import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: UserService, private counter: CounterService) { }

  activerUsersArray: string[];
  totalNumberOfUsersRemoved: number = 0;

  ngOnInit() {
    this.activerUsersArray = this.userService.activeUsers;
  }

  removeUser(userName: string) {
    this.userService.activeToInactive(userName);
    this.counter.usersRemoved();
    this.totalNumberOfUsersRemoved = this.counter.totalNumberOfUsersRemoved;
  }

}
