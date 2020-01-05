import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewsViewComponent } from './code-reviews-view.component';

describe('CodeReviewsViewComponent', () => {
  let component: CodeReviewsViewComponent;
  let fixture: ComponentFixture<CodeReviewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReviewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
