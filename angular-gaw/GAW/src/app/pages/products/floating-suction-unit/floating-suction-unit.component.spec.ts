import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSuctionUnitComponent } from './floating-suction-unit.component';

describe('FloatingSuctionUnitComponent', () => {
  let component: FloatingSuctionUnitComponent;
  let fixture: ComponentFixture<FloatingSuctionUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingSuctionUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingSuctionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
