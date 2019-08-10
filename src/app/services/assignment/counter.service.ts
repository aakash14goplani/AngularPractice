import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }

  totalNumberOfUsersRemoved = 0;
  totalNumberOfUsersAdded = 0;

  usersAdded() {
    this.totalNumberOfUsersAdded++;
  }

  usersRemoved() {
    this.totalNumberOfUsersRemoved++;
  }
}
