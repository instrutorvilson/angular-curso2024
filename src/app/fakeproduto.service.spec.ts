import { TestBed } from '@angular/core/testing';

import { FakeprodutoService } from './fakeproduto.service';

describe('FakeprodutoService', () => {
  let service: FakeprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
