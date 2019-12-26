import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippetViewComponent } from './code-snippet-view.component';

describe('CodeSnippetViewComponent', () => {
  let component: CodeSnippetViewComponent;
  let fixture: ComponentFixture<CodeSnippetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSnippetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSnippetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
