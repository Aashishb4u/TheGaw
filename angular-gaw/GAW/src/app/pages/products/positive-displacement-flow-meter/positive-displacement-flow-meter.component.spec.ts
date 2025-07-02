import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveDisplacementFlowMeterComponent } from './positive-displacement-flow-meter.component';

describe('PositiveDisplacementFlowMeterComponent', () => {
  let component: PositiveDisplacementFlowMeterComponent;
  let fixture: ComponentFixture<PositiveDisplacementFlowMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositiveDisplacementFlowMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositiveDisplacementFlowMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
