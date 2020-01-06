import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCompareComponent } from './code-compare.component';

describe('CodeCompareComponent', () => {
  let component: CodeCompareComponent;
  let fixture: ComponentFixture<CodeCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
