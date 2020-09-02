import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadListComponent } from './variedad-list.component';

describe('VariedadListComponent', () => {
  let component: VariedadListComponent;
  let fixture: ComponentFixture<VariedadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariedadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
