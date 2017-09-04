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

  constructor(
    private featureflowService: FeatureflowService
  ) {
    this.featureflow = this.featureflowService.init("key");
  }//so angular knows to inject it here

  ngOnInit() {

  }

}
