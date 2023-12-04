import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePoliticComponent } from './update-politic.component';

describe('UpdatePoliticComponent', () => {
  let component: UpdatePoliticComponent;
  let fixture: ComponentFixture<UpdatePoliticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePoliticComponent]
    });
    fixture = TestBed.createComponent(UpdatePoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
