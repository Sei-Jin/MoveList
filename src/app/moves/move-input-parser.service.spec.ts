import { TestBed } from '@angular/core/testing';

import { MoveInputParserService } from './move-input-parser.service';

describe('MoveInputParserService', () => {
  let service: MoveInputParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveInputParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
