import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
  private txtSearchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
  }

  searchTag(): void {
    const newTag = this.txtSearchInput?.nativeElement.value;
    if (!newTag) return;
    this.gifsService.searchTag(newTag);
    this.txtSearchInput.nativeElement.value = '';
  }
}
