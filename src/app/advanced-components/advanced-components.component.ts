import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit {

  serverDetailsArray: any[] = [];

  constructor() { }

  ngOnInit() {
  }
}
