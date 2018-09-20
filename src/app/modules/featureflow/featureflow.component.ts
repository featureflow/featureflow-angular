import { Component, OnInit } from '@angular/core';
import {FeatureflowService} from "./featureflow.service";

@Component({
  selector: 'app-featureflow',
  templateUrl: './featureflow.component.html',
  styleUrls: ['./featureflow.component.css'],
  providers: [FeatureflowService]
})
export class FeatureflowComponent implements OnInit {
  featureflow: any;
  private exampleFeatureStatus: 'off';

  constructor(
    private featureflowService: FeatureflowService
  ) {

    this.featureflow = this.featureflowService.init("js-env-yourKey");
  }//so angular knows to inject it here

  ngOnInit() {
    this.exampleFeatureStatus = this.featureflow.evaluate("example-feature").value();
  }

}
