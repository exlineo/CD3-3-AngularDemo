import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilKineComponent } from './accueil-kine.component';

describe('AccueilKineComponent', () => {
  let component: AccueilKineComponent;
  let fixture: ComponentFixture<AccueilKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilKineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
