import { TestBed } from '@angular/core/testing';

import { NavigationIconsService } from './navigation-icons.service';

describe('NavigationIconsService', () => {
  let service: NavigationIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
