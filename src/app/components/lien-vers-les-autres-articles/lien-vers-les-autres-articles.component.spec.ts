import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienVersLesAutresArticlesComponent } from './lien-vers-les-autres-articles.component';

describe('LienVersLesAutresArticlesComponent', () => {
  let component: LienVersLesAutresArticlesComponent;
  let fixture: ComponentFixture<LienVersLesAutresArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienVersLesAutresArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienVersLesAutresArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
