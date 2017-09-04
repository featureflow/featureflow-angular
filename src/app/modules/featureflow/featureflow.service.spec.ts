import { TestBed, inject } from '@angular/core/testing';

import { FeatureflowService } from './featureflow.service';

describe('FeatureflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureflowService]
    });
  });

  it('should be created', inject([FeatureflowService], (service: FeatureflowService) => {
    expect(service).toBeTruthy();
  }));
});
