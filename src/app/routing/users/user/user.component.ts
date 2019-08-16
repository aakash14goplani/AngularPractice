import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  paramSubscribtion: Subscription;

  user: {id: number, name: string};

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    this.paramSubscribtion = this.route.params.subscribe(
      (param: Params) => {
        this.user.id = param.id;
        this.user.name = param.name;
      }
    );
  }

  ngOnDestroy(): void {
    this.paramSubscribtion.unsubscribe();
  }

}
