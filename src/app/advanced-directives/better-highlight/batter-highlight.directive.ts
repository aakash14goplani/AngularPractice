import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBatterHighlight]'
})
export class BatterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'inherit';
  @HostBinding('style.color') color: string = 'inherit';
  @HostBinding('style.textAlign') textAlign: string = 'inherit';

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // console.log('enter: ', event);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');

    this.backgroundColor = 'black';
    this.color = 'white';
    this.textAlign = 'center';
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    // console.log('leave: ', event);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'inherit');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'inherit');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'inherit');

    this.backgroundColor = 'inherit';
    this.color = 'inherit';
    this.textAlign = 'inherit';
  }
}
