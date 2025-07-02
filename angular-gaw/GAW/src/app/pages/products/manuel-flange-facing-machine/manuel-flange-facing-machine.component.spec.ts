import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelFlangeFacingMachineComponent } from './manuel-flange-facing-machine.component';

describe('ManuelFlangeFacingMachineComponent', () => {
  let component: ManuelFlangeFacingMachineComponent;
  let fixture: ComponentFixture<ManuelFlangeFacingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManuelFlangeFacingMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuelFlangeFacingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
