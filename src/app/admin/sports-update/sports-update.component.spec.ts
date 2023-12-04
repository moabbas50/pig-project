import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsUpdateComponent } from './sports-update.component';

describe('SportsUpdateComponent', () => {
  let component: SportsUpdateComponent;
  let fixture: ComponentFixture<SportsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsUpdateComponent]
    });
    fixture = TestBed.createComponent(SportsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
