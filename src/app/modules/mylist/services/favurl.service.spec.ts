import { TestBed } from '@angular/core/testing';

import { FavurlService } from './favurl.service';

describe('FavurlService', () => {
  let service: FavurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
