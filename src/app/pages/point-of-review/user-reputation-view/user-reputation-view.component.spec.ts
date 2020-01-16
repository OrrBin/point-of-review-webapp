import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReputationViewComponent } from './user-reputation-view.component';

describe('UserReputationViewComponent', () => {
  let component: UserReputationViewComponent;
  let fixture: ComponentFixture<UserReputationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReputationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReputationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
