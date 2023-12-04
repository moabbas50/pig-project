import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpoliticadminComponent } from './listpoliticadmin.component';

describe('ListpoliticadminComponent', () => {
  let component: ListpoliticadminComponent;
  let fixture: ComponentFixture<ListpoliticadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpoliticadminComponent]
    });
    fixture = TestBed.createComponent(ListpoliticadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
