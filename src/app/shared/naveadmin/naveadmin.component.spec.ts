import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveadminComponent } from './naveadmin.component';

describe('NaveadminComponent', () => {
  let component: NaveadminComponent;
  let fixture: ComponentFixture<NaveadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaveadminComponent]
    });
    fixture = TestBed.createComponent(NaveadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
