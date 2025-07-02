import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLoadingArmsComponent } from './bottom-loading-arms.component';

describe('BottomLoadingArmsComponent', () => {
  let component: BottomLoadingArmsComponent;
  let fixture: ComponentFixture<BottomLoadingArmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomLoadingArmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomLoadingArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
