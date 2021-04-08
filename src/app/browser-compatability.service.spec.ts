import { TestBed } from '@angular/core/testing';

import { BrowserCompatabilityService } from './browser-compatability.service';

describe('BrowserCompatabilityService', () => {
  let service: BrowserCompatabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserCompatabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
