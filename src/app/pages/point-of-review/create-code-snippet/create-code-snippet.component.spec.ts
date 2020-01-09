import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodeSnippetComponent } from './create-code-snippet.component';

describe('CreateCodeSnippetComponent', () => {
  let component: CreateCodeSnippetComponent;
  let fixture: ComponentFixture<CreateCodeSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCodeSnippetComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
