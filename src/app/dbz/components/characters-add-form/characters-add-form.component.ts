import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'dbz-characters-add-form',
  standalone: false,
  templateUrl: './characters-add-form.component.html',
})
export class CharactersAddFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = {name: '', power: 0}

  emitCharacter($event: SubmitEvent): void {
    $event.preventDefault();
    if (this.character.name.trim().length === 0) return;
    if (this.character.power < 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
  }
}
