import {Component} from '@angular/core';
import {DbzService} from '../../services/dbz.service';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-dbz-page',
  standalone: false,
  templateUrl: './main-dbz-page.component.html',
})
export class MainDbzPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onRemoveCharacter(uuid: string): void {
    this.dbzService.removeCharacter(uuid);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
