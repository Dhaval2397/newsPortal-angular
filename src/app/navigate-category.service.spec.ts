import { TestBed } from '@angular/core/testing';

import { NavigateCategoryService } from './navigate-category.service';

describe('NavigateCategoryService', () => {
  let service: NavigateCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
