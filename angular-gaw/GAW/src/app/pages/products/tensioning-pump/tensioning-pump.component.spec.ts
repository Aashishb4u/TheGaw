import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensioningPumpComponent } from './tensioning-pump.component';

describe('TensioningPumpComponent', () => {
  let component: TensioningPumpComponent;
  let fixture: ComponentFixture<TensioningPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TensioningPumpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TensioningPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
