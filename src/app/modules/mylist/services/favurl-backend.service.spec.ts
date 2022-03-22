import { TestBed } from '@angular/core/testing';

import { FavurlBackendService } from './favurl-backend.service';

describe('FavurlBackendService', () => {
  let service: FavurlBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavurlBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
