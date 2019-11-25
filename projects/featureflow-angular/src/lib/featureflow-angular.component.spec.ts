import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureflowAngularComponent } from './featureflow-angular.component';

describe('FeatureflowAngularComponent', () => {
  let component: FeatureflowAngularComponent;
  let fixture: ComponentFixture<FeatureflowAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureflowAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureflowAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
