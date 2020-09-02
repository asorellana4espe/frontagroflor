import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloricolaListComponent } from './floricola-list.component';

describe('FloricolaListComponent', () => {
  let component: FloricolaListComponent;
  let fixture: ComponentFixture<FloricolaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloricolaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloricolaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
