import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoListComponent } from './registo-list.component';

describe('RegistoListComponent', () => {
  let component: RegistoListComponent;
  let fixture: ComponentFixture<RegistoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
