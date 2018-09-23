import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';

describe('ProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServiceService = TestBed.get(ProductServiceService);
    expect(service).toBeTruthy();
  });
});
