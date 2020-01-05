import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFeedComponent } from './personal-feed.component';

describe('PersonalFeedComponent', () => {
  let component: PersonalFeedComponent;
  let fixture: ComponentFixture<PersonalFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
