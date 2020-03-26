import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  Input
} from '@angular/core';
import { AdvancedSharedComponent } from '../shared-component.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-outer-component',
  templateUrl: './outer-component.component.html',
  styleUrls: ['./outer-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OuterComponentComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  serverName: string = '';
  serverContents: string = '';
  templateReferenceValue: string = '';
  @ViewChild('viewChild') viewChildReferenceValue: ElementRef;
  tempVar = '';
  // @Output() contentCreated = new EventEmitter<{type: string, serverName: string, serverContents: string}>();
  // tslint:disable-next-line: no-output-rename
  @Output('customElement') contentCreated = new EventEmitter<{type: string, serverName: string, serverContents: string}>();
  @Input() lifeCycleHookArray: string[];
  tempArray: string[] = [];
  @Output() outerOutput = new EventEmitter<string[]>();
  inst:AdvancedSharedComponent = new AdvancedSharedComponent();

  constructor() {
    this.tempArray.push('Outer Constructor');
    this.inst.printProperties('Outer Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tempArray.push('Outer OnChanges');
    this.inst.printProperties('Outer Constructor');
  }

  ngOnInit() {
    this.tempArray.push('Outer OnInit');
    this.inst.printProperties('Outer Constructor');
  }

  ngDoCheck(): void {
    this.tempArray.push('Outer DoCheck');
    this.inst.printProperties('Outer Constructor');
    // console.log('len outer: ', this.inst.printProperties.length);
  }

  ngAfterContentInit(): void {
    this.tempArray.push('Outer AfterContentInit');
    this.inst.printProperties('Outer Constructor');
  }

  ngAfterContentChecked(): void {
    this.tempArray.push('Outer AfterContentChecked');
    this.inst.printProperties('Outer Constructor');
  }

  ngAfterViewInit(): void {
    this.tempArray.push('Outer AfterViewInit');
    this.inst.printProperties('Outer Constructor');
  }

  ngAfterViewChecked(): void {
    this.tempArray.push('Outer AfterViewChecked');
    this.inst.printProperties('Outer Constructor');
  }

  ngOnDestroy(): void {
    this.tempArray.push('Outer OnDestroy');
    this.inst.printProperties('Outer Constructor');
  }

  addServerContentsToArray(inputType: string) {
    this.contentCreated.emit({
      type: inputType,
      serverName: this.serverName,
      serverContents: this.serverContents
    });
  }

  testTemplateReference(templateReference: HTMLInputElement) {
    this.templateReferenceValue = templateReference.value;
  }

  viewChildReference() {
    this.tempVar = this.viewChildReferenceValue.nativeElement.value;
  }

  joinArrayContents() {
    this.tempArray = this.lifeCycleHookArray.concat(this.tempArray);
    this.outerOutput.emit(this.tempArray);
  }
}
