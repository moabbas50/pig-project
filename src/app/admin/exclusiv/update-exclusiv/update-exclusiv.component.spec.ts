import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExclusivComponent } from './update-exclusiv.component';

describe('UpdateExclusivComponent', () => {
  let component: UpdateExclusivComponent;
  let fixture: ComponentFixture<UpdateExclusivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateExclusivComponent]
    });
    fixture = TestBed.createComponent(UpdateExclusivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
