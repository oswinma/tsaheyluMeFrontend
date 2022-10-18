import { TestBed } from '@angular/core/testing';

import { InvitationBackendService } from './invitation-backend.service';

describe('InvitationBackendService', () => {
  let service: InvitationBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
