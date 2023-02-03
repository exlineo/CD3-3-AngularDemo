import { TestBed } from '@angular/core/testing';

import { Aie401Interceptor } from './aie-401.interceptor';

describe('Aie401Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Aie401Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Aie401Interceptor = TestBed.inject(Aie401Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
