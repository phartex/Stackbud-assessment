import { TestBed } from '@angular/core/testing';

import { IblogService } from './iblog.service';

describe('IblogService', () => {
  let service: IblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
