import { TestBed } from '@angular/core/testing';

import { PdfLookupService } from './pdf-lookup.service';

describe('PdfLookupService', () => {
  let service: PdfLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
