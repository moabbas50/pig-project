import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticNewsComponent } from './politic-news.component';

describe('PoliticNewsComponent', () => {
  let component: PoliticNewsComponent;
  let fixture: ComponentFixture<PoliticNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticNewsComponent]
    });
    fixture = TestBed.createComponent(PoliticNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
