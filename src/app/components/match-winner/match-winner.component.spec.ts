import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchWinnerComponent } from './match-winner.component';

describe('MatchWinnerComponent', () => {
  let component: MatchWinnerComponent;
  let fixture: ComponentFixture<MatchWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
