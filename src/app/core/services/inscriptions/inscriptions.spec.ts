import { TestBed } from '@angular/core/testing';
import { InscriptionsService } from './inscriptions';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('InscriptionsService', () => {
  let service: InscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InscriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});