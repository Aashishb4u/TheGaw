import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutSplitterComponent } from './nut-splitter.component';

describe('NutSplitterComponent', () => {
  let component: NutSplitterComponent;
  let fixture: ComponentFixture<NutSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutSplitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
