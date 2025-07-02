import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorquePumpComponent } from './torque-pump.component';

describe('TorquePumpComponent', () => {
  let component: TorquePumpComponent;
  let fixture: ComponentFixture<TorquePumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TorquePumpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorquePumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
