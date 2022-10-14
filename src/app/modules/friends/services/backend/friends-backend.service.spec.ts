import { TestBed } from '@angular/core/testing';

import { FriendsBackendService } from './friends-backend.service';

describe('FriendsbackendService', () => {
  let service: FriendsBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
