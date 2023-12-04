import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPoliticComponent } from './creat-politic.component';

describe('CreatPoliticComponent', () => {
  let component: CreatPoliticComponent;
  let fixture: ComponentFixture<CreatPoliticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatPoliticComponent]
    });
    fixture = TestBed.createComponent(CreatPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
