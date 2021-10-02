import { TestBed } from '@angular/core/testing';

import { CritzlezOSConnectorService } from './critzlez-osconnector.service';

describe('CritzlezOSConnectorService', () => {
  let service: CritzlezOSConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CritzlezOSConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
