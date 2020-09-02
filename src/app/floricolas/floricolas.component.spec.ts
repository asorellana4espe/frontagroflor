import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloricolasComponent } from './floricolas.component';

describe('FloricolasComponent', () => {
  let component: FloricolasComponent;
  let fixture: ComponentFixture<FloricolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloricolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
