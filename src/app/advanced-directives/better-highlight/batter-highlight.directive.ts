import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBatterHighlight]'
})
export class BatterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @Input() defaultColor: string = 'inherit';
  @Input() defaultHighlightColor: string = 'inherit';
  @Input() defaultTextAlign: string = 'inherit';
  @Input() onHoverColor: string = 'white';
  @Input() onHoverHighlightColor: string = 'black';
  @Input() onHoverTextAlign: string = 'center';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'inherit';
  // @HostBinding('style.color') color: string = 'inherit';
  // @HostBinding('style.textAlign') textAlign: string = 'inherit';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.textAlign') textAlign: string;

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');

    this.backgroundColor = this.defaultHighlightColor;
    this.color = this.defaultColor;
    this.textAlign = this.defaultTextAlign;
  }

  @HostListener('mouseenter') mouseover() {
    // console.log('enter: ', event);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');

    // this.backgroundColor = 'black';
    // this.color = 'white';
    // this.textAlign = 'center';

    this.backgroundColor = this.onHoverHighlightColor;
    this.color = this.onHoverColor;
    this.textAlign = this.onHoverTextAlign;
  }
  @HostListener('mouseleave') mouseleave() {
    // console.log('leave: ', event);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'inherit');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'inherit');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'inherit');

    // this.backgroundColor = 'inherit';
    // this.color = 'inherit';
    // this.textAlign = 'inherit';

    // this.defaultHighlightColor = 'inherit';
    // this.defaultColor = 'inherit';
    // this.defaultTextAlign = 'inherit';
    this.backgroundColor = this.defaultHighlightColor;
    this.color = this.defaultColor;
    this.textAlign = this.defaultTextAlign;
  }
}
