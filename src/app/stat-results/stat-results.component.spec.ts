import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatResultsComponent } from './stat-results.component';

describe('StatResultsComponent', () => {
  let component: StatResultsComponent;
  let fixture: ComponentFixture<StatResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
