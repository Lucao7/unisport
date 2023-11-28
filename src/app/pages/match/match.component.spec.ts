import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheComponent } from './match.component';

describe('MatcheComponent', () => {
  let component: MatcheComponent;
  let fixture: ComponentFixture<MatcheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatcheComponent]
    });
    fixture = TestBed.createComponent(MatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
