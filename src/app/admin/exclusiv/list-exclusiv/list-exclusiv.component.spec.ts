import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExclusivComponent } from './list-exclusiv.component';

describe('ListExclusivComponent', () => {
  let component: ListExclusivComponent;
  let fixture: ComponentFixture<ListExclusivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExclusivComponent]
    });
    fixture = TestBed.createComponent(ListExclusivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
