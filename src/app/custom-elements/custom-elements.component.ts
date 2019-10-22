import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { CustomAlertElementComponent } from './custom-alert-element';

@Component({
  selector: 'app-custom-elements',
  templateUrl: './custom-elements.component.html',
  styleUrls: ['./custom-elements.component.css']
})
export class CustomElementsComponent implements OnInit {

  constructor(private injector: Injector, private domSanitizer: DomSanitizer) { }

  content: SafeHtml = '';

  ngOnInit() {
    const alertComponent = createCustomElement(CustomAlertElementComponent, { injector: this.injector });
    customElements.define('random-tag', alertComponent);

    setTimeout(() => {
      // this.content = '<hr><div>Dynamic Content Update from Server!!!</div>';
      this.content = this.domSanitizer
                     .bypassSecurityTrustHtml('<hr><random-tag message="Dynamic Content Update from Server!!!"></random-tag>');
    }, 1000);
  }

}
