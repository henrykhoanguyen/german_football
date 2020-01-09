import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsButtonComponent } from './seasons-button.component';

describe('SeasonsButtonComponent', () => {
  let component: SeasonsButtonComponent;
  let fixture: ComponentFixture<SeasonsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
