import { TestBed } from '@angular/core/testing';

import { PkButtonService } from './pk-button.service';

describe('PkButtonService', () => {
  let service: PkButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
