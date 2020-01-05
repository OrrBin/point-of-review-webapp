import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedComponentComponent } from './authorized-component.component';

describe('AuthorizedComponentComponent', () => {
  let component: AuthorizedComponentComponent;
  let fixture: ComponentFixture<AuthorizedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
