import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilNutriComponent } from './accueil-nutri.component';

describe('AccueilNutriComponent', () => {
  let component: AccueilNutriComponent;
  let fixture: ComponentFixture<AccueilNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
