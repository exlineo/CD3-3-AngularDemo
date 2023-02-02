import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilOptoComponent } from './accueil-opto.component';

describe('AccueilOptoComponent', () => {
  let component: AccueilOptoComponent;
  let fixture: ComponentFixture<AccueilOptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilOptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilOptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
