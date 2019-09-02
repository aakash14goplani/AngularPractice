import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserObservableService } from './user-observable/user-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers: [UserObservableService]
})
export class ObservablesComponent implements OnInit, OnDestroy {

  constructor(private userService: UserObservableService) { }
  activateUser = false;
  subjectSubscription: Subscription;

  ngOnInit() {
    this.subjectSubscription = this.userService.userStatus.subscribe(
      (userStatus: boolean) => {
        this.activateUser = userStatus;
      }
    );
  }

  ngOnDestroy(): void {
    this.subjectSubscription.unsubscribe();
  }

}
