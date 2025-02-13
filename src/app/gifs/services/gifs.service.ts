import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, GiphySearchResponse} from '../interfaces/giphy-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private _gifList: Gif[] = [];

  private apiKey: string = '{{YOUR_API_KEY}}';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 10;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const tagsHistory = localStorage.getItem('tagsHistory');
    if (!tagsHistory) return;

    this._tagsHistory = JSON.parse(tagsHistory) as string[];
    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }

  private organizeTagsHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }

    this._tagsHistory.unshift(tag);

    if (this._tagsHistory.length === 10) {
      this._tagsHistory.pop();
    }

    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (!tag || tag.trim().length === 0) return;
    this.organizeTagsHistory(tag);

    // https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', this.limit);

    this.http.get<GiphySearchResponse>(`${this.baseUrl}/search`, {params})
      .subscribe((resp) => {
        this._gifList = resp.data;
      });
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  get gifList(): Gif[] {
    return [...this._gifList];
  }

}
