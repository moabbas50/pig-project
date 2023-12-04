import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivComponent } from './exclusiv.component';

describe('ExclusivComponent', () => {
  let component: ExclusivComponent;
  let fixture: ComponentFixture<ExclusivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExclusivComponent]
    });
    fixture = TestBed.createComponent(ExclusivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
