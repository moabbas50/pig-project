import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsportadminComponent } from './listsportadmin.component';

describe('ListsportadminComponent', () => {
  let component: ListsportadminComponent;
  let fixture: ComponentFixture<ListsportadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsportadminComponent]
    });
    fixture = TestBed.createComponent(ListsportadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
