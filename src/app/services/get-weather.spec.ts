import { TestBed } from '@angular/core/testing';

import { GetWeather } from '../get-weather';

describe('GetWeather', () => {
  let service: GetWeather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
