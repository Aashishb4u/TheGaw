import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangeSpreaderComponent } from './flange-spreader.component';

describe('FlangeSpreaderComponent', () => {
  let component: FlangeSpreaderComponent;
  let fixture: ComponentFixture<FlangeSpreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlangeSpreaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlangeSpreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
