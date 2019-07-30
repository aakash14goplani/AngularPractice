import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  @Output() eventFired = new EventEmitter<number>();
  incrementer: number = 0;
  reference: any;

  ngOnInit() {
  }

  startGame() {
    this.reference = setInterval(() => {
      this.eventFired.emit(this.incrementer + 1);
      this.incrementer++;
    }, 1000);
  }

  incrementFunction() {
    return this.incrementer++;
  }

  endGame() {
    clearInterval(this.reference);
    // this.incrementer = 0;
  }
}
