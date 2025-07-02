import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdMountedFlangeFacingMachineComponent } from './id-mounted-flange-facing-machine.component';

describe('IdMountedFlangeFacingMachineComponent', () => {
  let component: IdMountedFlangeFacingMachineComponent;
  let fixture: ComponentFixture<IdMountedFlangeFacingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdMountedFlangeFacingMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdMountedFlangeFacingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
