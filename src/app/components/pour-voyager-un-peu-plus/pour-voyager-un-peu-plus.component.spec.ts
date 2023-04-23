import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourVoyagerUnPeuPlusComponent } from './pour-voyager-un-peu-plus.component';

describe('PourVoyagerUnPeuPlusComponent', () => {
  let component: PourVoyagerUnPeuPlusComponent;
  let fixture: ComponentFixture<PourVoyagerUnPeuPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourVoyagerUnPeuPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PourVoyagerUnPeuPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
