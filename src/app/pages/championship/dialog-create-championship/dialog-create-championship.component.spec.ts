import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateChampionshipComponent } from './dialog-create-championship.component';

describe('DialogCreateChampionshipComponent', () => {
  let component: DialogCreateChampionshipComponent;
  let fixture: ComponentFixture<DialogCreateChampionshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateChampionshipComponent]
    });
    fixture = TestBed.createComponent(DialogCreateChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
