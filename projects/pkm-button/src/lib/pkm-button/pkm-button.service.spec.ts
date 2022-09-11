import { TestBed } from '@angular/core/testing';

import { PkButtonService } from './pkm-button.service';

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
