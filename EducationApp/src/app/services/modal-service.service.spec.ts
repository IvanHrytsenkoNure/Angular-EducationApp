import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { ModalService } from './modal-service.service';

describe('ModalServiceService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AppComponent]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
