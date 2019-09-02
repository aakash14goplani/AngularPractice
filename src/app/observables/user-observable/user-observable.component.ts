import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserObservableService } from './user-observable.service';

@Component({
  selector: 'app-user-observable',
  templateUrl: './user-observable.component.html',
  styleUrls: ['./user-observable.component.css']
})
export class UserObservableComponent implements OnInit {

  id: number;
  userActive: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserObservableService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  activateUser(): void {
    this.userActive = !this.userActive;
    // this.userService.userStatus.emit(this.userActive);
    this.userService.userStatus.next(this.userActive);
  }

}
