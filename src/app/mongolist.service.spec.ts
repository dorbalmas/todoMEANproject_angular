import { TestBed } from '@angular/core/testing';

import { MongolistService } from './mongolist.service';

describe('MongolistService', () => {
  let service: MongolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
