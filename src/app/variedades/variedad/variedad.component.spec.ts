import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadComponent } from './variedad.component';

describe('VariedadComponent', () => {
  let component: VariedadComponent;
  let fixture: ComponentFixture<VariedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
