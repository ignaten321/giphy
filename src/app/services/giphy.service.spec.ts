import { inject, TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', inject([GiphyService, HttpTestingController], (backend: HttpTestingController) => {
    service.getGifsReady().subscribe(gifs => {
      expect(gifs).toBeTruthy();
    })
  }))

});
