import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLoadingArmsComponent } from './top-loading-arms.component';

describe('TopLoadingArmsComponent', () => {
  let component: TopLoadingArmsComponent;
  let fixture: ComponentFixture<TopLoadingArmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopLoadingArmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLoadingArmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
