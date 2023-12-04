import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCreatComponent } from './sports-creat.component';

describe('SportsCreatComponent', () => {
  let component: SportsCreatComponent;
  let fixture: ComponentFixture<SportsCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsCreatComponent]
    });
    fixture = TestBed.createComponent(SportsCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
