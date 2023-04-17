import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRetourComponent } from './button-retour.component';

describe('ButtonRetourComponent', () => {
  let component: ButtonRetourComponent;
  let fixture: ComponentFixture<ButtonRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRetourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
