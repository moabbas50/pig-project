import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatExclusivComponent } from './creat-exclusiv.component';

describe('CreatExclusivComponent', () => {
  let component: CreatExclusivComponent;
  let fixture: ComponentFixture<CreatExclusivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatExclusivComponent]
    });
    fixture = TestBed.createComponent(CreatExclusivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
