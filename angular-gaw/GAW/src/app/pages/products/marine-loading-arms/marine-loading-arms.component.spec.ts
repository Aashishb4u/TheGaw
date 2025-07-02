import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineLoadingArmsComponent } from './marine-loading-arms.component';

describe('MarineLoadingArmsComponent', () => {
  let component: MarineLoadingArmsComponent;
  let fixture: ComponentFixture<MarineLoadingArmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarineLoadingArmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineLoadingArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
