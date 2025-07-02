import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestManifoldsComponent } from './test-manifolds.component';

describe('TestManifoldsComponent', () => {
  let component: TestManifoldsComponent;
  let fixture: ComponentFixture<TestManifoldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestManifoldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestManifoldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
