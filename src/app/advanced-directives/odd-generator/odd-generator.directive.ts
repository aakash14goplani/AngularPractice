import { Directive, TemplateRef, ViewContainerRef, Input,  } from '@angular/core';

@Directive({
  selector: '[appOddGenerator]'
})
export class OddGeneratorDirective {

  @Input() set appOddGenerator(condition: boolean) {
    if (!condition) {
      // do-something
      this.vireref.createEmbeddedView(this.templateRef);
    } else {
      // don't do
      this.vireref.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vireref: ViewContainerRef) { }

}
