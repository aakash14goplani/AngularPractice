import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-directives',
  templateUrl: './advanced-directives.component.html',
  styleUrls: ['./advanced-directives.component.css']
})
export class AdvancedDirectivesComponent implements OnInit {

  constructor() { }

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  ngOnInit() {
  }

}
