import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationDialogComponent } from './reputation-dialog.component';

describe('ReputationDialogComponent', () => {
  let component: ReputationDialogComponent;
  let fixture: ComponentFixture<ReputationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
