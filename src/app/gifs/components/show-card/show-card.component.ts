import {Component, Input, OnInit} from '@angular/core';
import {Gif} from '../../interfaces/giphy-response.interface';

@Component({
  selector: 'gifs-show-card',
  standalone: false,
  templateUrl: './show-card.component.html',
})
export class ShowCardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif is required');
    }
  }

}
