import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureflowComponent } from './featureflow.component';

describe('FeatureflowComponent', () => {
  let component: FeatureflowComponent;
  let fixture: ComponentFixture<FeatureflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
