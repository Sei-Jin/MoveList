import { TestBed } from '@angular/core/testing';

import { MoveIconsService } from './move-icons.service';

describe('MoveIconsService', () => {
  let service: MoveIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
