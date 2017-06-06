import { TestBed, inject } from '@angular/core/testing';

import { InstanceDataService } from './instance-data.service';

describe('InstanceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstanceDataService]
    });
  });

  it('should be created', inject([InstanceDataService], (service: InstanceDataService) => {
    expect(service).toBeTruthy();
  }));
});
