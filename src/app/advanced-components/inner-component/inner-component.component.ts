import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { AdvancedSharedComponent } from '../shared-component.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // @Input() element: {type: string, name: string, content: string};
  // tslint:disable-next-line: no-input-rename
  @Input('customElement') element: {type: string, serverName: string, serverContent: string};
  @Input() lifeCycleHookArray: string[];
  @Input() iterationCount: number;
  tempArray: string[] = [];
  @Output() innerOutput = new EventEmitter<string[]>();

  inst:AdvancedSharedComponent = new AdvancedSharedComponent();

  constructor() {
    this.tempArray.push('Inner Constructor');
    this.inst.printProperties('Inner Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tempArray.push('Inner OnChanges');
    this.inst.printProperties('Inner Constructor');
    // console.log('len innr', this.inst.printProperties.length);
  }

  ngOnInit() {
    this.tempArray.push('Inner OnInit');
    this.inst.printProperties('Inner Constructor');
  }

  ngDoCheck(): void {
    this.tempArray.push('Inner DoCheck');
    this.inst.printProperties('Inner Constructor');
  }

  ngAfterContentInit(): void {
    this.tempArray.push('Inner AfterContentInit');
    this.inst.printProperties('Inner Constructor');
  }

  ngAfterContentChecked(): void {
    this.tempArray.push('Inner AfterContentChecked');
    this.inst.printProperties('Inner Constructor');
  }

  ngAfterViewInit(): void {
    this.tempArray.push('Inner AfterViewInit');
    this.inst.printProperties('Inner Constructor');
  }

  ngAfterViewChecked(): void {
    this.tempArray.push('Inner AfterViewChecked');
    this.inst.printProperties('Inner Constructor');
  }

  ngOnDestroy(): void {
    this.tempArray.push('Inner OnDestroy');
    this.inst.printProperties('Inner Constructor');
  }

  joinArrayContents() {
    this.tempArray = this.lifeCycleHookArray.concat(this.tempArray);
    this.innerOutput.emit(this.tempArray);
  }

}
