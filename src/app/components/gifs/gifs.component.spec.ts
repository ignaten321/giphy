import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GifsComponent } from './gifs.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GiphyService } from '../../services/giphy.service';
import { Observable, of } from 'rxjs';

describe('GifsComponent', () => {
  let component: GifsComponent;
  let fixture: ComponentFixture<GifsComponent>;
  let giphyService: GiphyService;
  let spy: jasmine.Spy;
  let mockGify;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsComponent],
      imports: [HttpClientTestingModule],
      providers: [GiphyService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(GiphyService);
    giphyService = TestBed.get(GiphyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment page by 1', () => {
    component.incrementPage();
    expect(component.page).toBe(2);
  });

  it('should dasnt decrement page by 1 if page = 1', () => {
    component.decrementPage();
    expect(component.page).toBe(1);
  });

  it('should decrement page by 1 if page > 1', () => {
    component.page = 2;
    component.decrementPage();
    expect(component.page).toBe(1);
  });

});
