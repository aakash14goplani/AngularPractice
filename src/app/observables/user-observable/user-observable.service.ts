import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserObservableService {

    // userStatus = new EventEmitter<boolean>();
    userStatus = new Subject<boolean>();
}
