import { TestBed } from '@angular/core/testing';

import { MessageBackendService } from './message-backend.service';

describe('MessageBackendService', () => {
  let service: MessageBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
