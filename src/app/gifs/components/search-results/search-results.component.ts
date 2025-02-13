import {Component, Input} from '@angular/core';
import {Gif} from '../../interfaces/giphy-response.interface';

@Component({
  selector: 'gifs-search-results',
  standalone: false,
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  @Input()
  public gifs: Gif[] = [];
}
