import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=45`)
      .subscribe((response: any) => {
        this.gifs.next(response.data)
      })
  }

  searchGifs(serchingValue: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${serchingValue}&api_key=${environment.giphyApiKey}&limit=45`)
      .subscribe((response: any) => {
        this.gifs.next(response.data)
      })
  }

  getGifsReady(){
    return this.gifs.asObservable();
  }

}
