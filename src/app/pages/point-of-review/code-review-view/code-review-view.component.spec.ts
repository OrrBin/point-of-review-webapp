import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewViewComponent } from './code-review-view.component';

describe('CodeReviewViewComponent', () => {
  let component: CodeReviewViewComponent;
  let fixture: ComponentFixture<CodeReviewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReviewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
