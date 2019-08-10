import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  activeUsers = ['User 1', 'User 3'];
  inactiveUsers = ['User 2', 'User 4'];

  activeToInactive(user: string) {
    for (let i = 0; i < this.activeUsers.length; i++) {
      if (this.activeUsers[i] === user) {
        this.activeUsers.splice(i, 1);
      }
    }
    this.inactiveUsers.push(user);
  }

  inactiveToActive(user: string) {
    for (let i = 0; i < this.inactiveUsers.length; i++) {
      if (this.inactiveUsers[i] === user) {
        this.inactiveUsers.splice(i, 1);
      }
    }
    this.activeUsers.push(user);
  }
}
