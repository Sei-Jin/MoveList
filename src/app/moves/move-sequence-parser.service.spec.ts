import { TestBed } from '@angular/core/testing';

import { MoveSequenceParserService } from './move-sequence-parser.service';

describe('MoveInputParserService', () => {
  let service: MoveSequenceParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveSequenceParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
