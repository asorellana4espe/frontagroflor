import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloricolaComponent } from './floricola.component';

describe('FloricolaComponent', () => {
  let component: FloricolaComponent;
  let fixture: ComponentFixture<FloricolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloricolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
