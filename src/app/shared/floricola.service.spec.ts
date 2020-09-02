import { TestBed } from '@angular/core/testing';

import { FloricolaService } from './floricola.service';

describe('FloricolaService', () => {
  let service: FloricolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloricolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
