import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-characters-list',
  standalone: false,
  templateUrl: './characters-dbz-list.component.html',
})
export class CharactersDbzListComponent {
  @Input()
  public characters: Character[] = [];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter<string>();

  public onDeleteCharacter(uuid?: string): void {
    if (!uuid) return;
    this.onDeleteId.emit(uuid);
  }
}
