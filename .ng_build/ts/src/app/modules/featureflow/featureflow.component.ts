import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featureflow',
  template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class FeatureflowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
