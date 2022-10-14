import { TestBed } from '@angular/core/testing';

import { GroupBackendService } from './group-backend.service';

describe('GroupbackendService', () => {
  let service: GroupBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
