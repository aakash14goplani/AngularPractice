import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-observable',
  templateUrl: './home-observable.component.html',
  styleUrls: ['./home-observable.component.css']
})
export class HomeObservableComponent implements OnInit, OnDestroy {

  incrementer: number;
  decrementer: number;
  errorMessage: string;
  statusMessage: string;
  incrementerSubscription: Subscription;
  customDecrementerSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.incrementerSubscription = interval(1000).subscribe(
      (count) => {
        this.incrementer = count;
        // console.log('incrementer: ', this.incrementer);
      }
    );

    const customObservable = new Observable(
      (observer) => {
        let count = 0;
        setInterval(
          () => {
            observer.next(count);

            if (Math.ceil(Math.random() * 10) === 10) {
              observer.complete();
            }

            if (count < -10) {
              observer.error(new Error('stack limit exceeded!'));
            }
            count--;
          },
        1000);
      }
    );

    // this.customDecrementerSubscription = customObservable.subscribe(
    this.customDecrementerSubscription = customObservable.pipe(filter(
      (data: number) => {
        return (data % 2 === 0);
      }), map(
      (data: number) => {
        // return 'num - ' + data;
        return data;
      }
    )).subscribe(
      (data: number) => {
        // console.log('decrementer: ', data);
        this.decrementer = data;
      },
      (error) => {
        this.errorMessage = 'Error occured: ' + error.message;
      },
      () => {
        this.statusMessage = 'Custom Observable completed successfully!';
      }
    );

  }

  ngOnDestroy(): void {
    this.incrementerSubscription.unsubscribe();
    this.customDecrementerSubscription.unsubscribe();
  }

}
