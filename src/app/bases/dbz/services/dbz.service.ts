import {Injectable} from '@angular/core';
import {Character} from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {id: uuid(), name: 'Gokú', power: 10000},
    {id: uuid(), name: 'Vegeta', power: 9000},
    {id: uuid(), name: 'Trunks', power: 8000},
  ];

  addCharacter(character: Character): void {
    const newCharacter = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  removeCharacter(uuid: string): void {
    this.characters = this.characters.filter(character => character.id !== uuid);
  }


}
