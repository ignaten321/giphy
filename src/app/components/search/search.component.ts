import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }

  search(serchingValue: string) {
    if (serchingValue !== '') {
      this.giphyService.searchGifs(serchingValue);
    }
  }

}
