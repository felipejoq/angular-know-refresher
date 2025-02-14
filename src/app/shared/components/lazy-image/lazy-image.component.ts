import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public src!: string;

  @Input()
  public alt: string = 'No image';

  public hasLoaded: boolean = false;

  public onLoad(): void {
    this.hasLoaded = true;
  }

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('src is required');
    }
  }
}
