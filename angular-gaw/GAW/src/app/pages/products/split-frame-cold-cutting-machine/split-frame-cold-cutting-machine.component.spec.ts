import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitFrameColdCuttingMachineComponent } from './split-frame-cold-cutting-machine.component';

describe('SplitFrameColdCuttingMachineComponent', () => {
  let component: SplitFrameColdCuttingMachineComponent;
  let fixture: ComponentFixture<SplitFrameColdCuttingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitFrameColdCuttingMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitFrameColdCuttingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
