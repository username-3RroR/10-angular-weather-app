import { TestBed } from '@angular/core/testing';

import { SearchLocation } from '../search-location';

describe('SearchLocation', () => {
  let service: SearchLocation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchLocation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
