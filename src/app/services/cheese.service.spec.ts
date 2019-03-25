import { TestBed } from '@angular/core/testing';

import { CheeseService } from './cheese.service';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheeseService = TestBed.get(CheeseService);
    expect(service).toBeTruthy();
  });
});
