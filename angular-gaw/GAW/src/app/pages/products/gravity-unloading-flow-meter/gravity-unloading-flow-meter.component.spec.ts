import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityUnloadingFlowMeterComponent } from './gravity-unloading-flow-meter.component';

describe('GravityUnloadingFlowMeterComponent', () => {
  let component: GravityUnloadingFlowMeterComponent;
  let fixture: ComponentFixture<GravityUnloadingFlowMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GravityUnloadingFlowMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravityUnloadingFlowMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
