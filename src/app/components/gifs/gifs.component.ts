import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../../services/giphy.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any;
  giftSubscribe!: Subscription;
  page = 1;


  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {

    this.giphyService.getGifs();
    this.giftSubscribe = this.giphyService.getGifsReady().subscribe((response: any) => {
      this.gifs = response;

      let arr: any = [];
      while (this.gifs.length) {
        arr.push(this.gifs.splice(0, 9));
      }
      this.gifs = arr;
    })
  }

  ngOnDestroy() {
    this.giftSubscribe.unsubscribe();
  }

  incrementPage() {
    this.page++;
  }

  decrementPage() {
    if (this.page != 1) {
      this.page--;
    }
  }

}
