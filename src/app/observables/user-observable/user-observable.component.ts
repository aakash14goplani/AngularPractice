import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-observable',
  templateUrl: './user-observable.component.html',
  styleUrls: ['./user-observable.component.css']
})
export class UserObservableComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

}
