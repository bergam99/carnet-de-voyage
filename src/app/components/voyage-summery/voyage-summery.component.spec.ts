import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageSummeryComponent } from './voyage-summery.component';

describe('VoyageSummeryComponent', () => {
  let component: VoyageSummeryComponent;
  let fixture: ComponentFixture<VoyageSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
