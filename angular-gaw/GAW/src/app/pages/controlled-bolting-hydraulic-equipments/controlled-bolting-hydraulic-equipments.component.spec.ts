import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledBoltingHydraulicEquipmentsComponent } from './controlled-bolting-hydraulic-equipments.component';

describe('ControlledBoltingHydraulicEquipmentsComponent', () => {
  let component: ControlledBoltingHydraulicEquipmentsComponent;
  let fixture: ComponentFixture<ControlledBoltingHydraulicEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlledBoltingHydraulicEquipmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlledBoltingHydraulicEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
