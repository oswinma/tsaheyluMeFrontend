import { TestBed } from '@angular/core/testing';

import { GroupDataBackendService } from './group-data-backend.service';

describe('GroupDataBackendService', () => {
  let service: GroupDataBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupDataBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
