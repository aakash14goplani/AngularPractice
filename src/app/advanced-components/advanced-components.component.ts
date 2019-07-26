import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit {

  serverDetailsArray: any[] = [];
  serverName: string = '';
  serverContents: string = '';

  constructor() { }

  ngOnInit() {
  }

  addServerContentsToArray(inputType: string) {
    let contentType = '';
    if (inputType !== undefined) {
      if (inputType.toLocaleLowerCase() === 'server') {
        contentType = 'server';
      } else if (inputType.toLocaleLowerCase() === 'blueprint') {
        contentType = 'blueprint';
      } else {
        contentType = 'error';
      }
      this.serverDetailsArray.push({
        type: contentType,
        name: this.serverName,
        content: this.serverContents
      });
    }
    console.log('array obj: ' , this.serverDetailsArray);
  }

  /*
    Taking input from user:

    1.  <form (submit)="onSubmit(player.value)">
          <input #player placeholder="player name">
        </form>
        onSubmit(playerName: string) {
          console.log(playerName)
        }

    2.  <form (ngSubmit)="onSubmit($event)">
          <input name="player" value="Name">
        </form>
        onSubmit(event: any) {
          return event.target.player.value;
        }

    3.  <input (keyup)="onKey($event)">
        onKey(event) {const inputValue = event.target.value;}

    4. use ngModel
    5. https://codippa.com/how-to-get-value-of-input-box-in-angular/
  */

}
