import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'black';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.textAlign = 'center';
    }

}
