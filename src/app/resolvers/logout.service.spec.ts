import { TestBed, inject } from '@angular/core/testing';

import { LogoutResolver } from './logout.service';

describe('LogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutResolver]
    });
  });

  it('should be created', inject([LogoutResolver], (service: LogoutResolver) => {
    expect(service).toBeTruthy();
  }));
});
