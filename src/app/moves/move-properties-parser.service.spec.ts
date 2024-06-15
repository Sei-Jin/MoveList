import { TestBed } from '@angular/core/testing';

import { MovePropertiesParserService } from './move-properties-parser.service';

describe('MovePropertiesParserService', () => {
  let service: MovePropertiesParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovePropertiesParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
