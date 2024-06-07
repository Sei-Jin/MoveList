import { TestBed } from '@angular/core/testing';

import { MoveDescriptionParserService } from './move-description-parser.service';

describe('MoveDescriptionParserService', () => {
  let service: MoveDescriptionParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveDescriptionParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
