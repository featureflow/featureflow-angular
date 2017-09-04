import { Component } from '@angular/core';
import { FeatureflowService } from './modules/featureflow/featureflow.service';
import { Featureflow } from 'featureflow-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeatureflowService]
})
export class AppComponent {

  title = 'app';

  constructor(
    private featureflowService: FeatureflowService) {}//so angular knows to inject it here
}

