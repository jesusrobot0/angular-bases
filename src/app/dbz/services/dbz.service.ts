import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { v4 as uuid } from 'uuid';

/* ********** INTERFACES ********** */
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DBZService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  public characterSelected: Character = { id: '', name: '', power: 0 };

  private selectedCharacterSubject = new BehaviorSubject<Character>({ id: '', name: '', power: 0 });
  public selectedCharacter$ = this.selectedCharacterSubject.asObservable();

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  updateCharacter(id: string): void {
    const characterToUpdate = this.characters.find(character => character.id === id)!;
    this.selectedCharacterSubject.next(characterToUpdate);
  }

  // Este método actualizará los datos del personaje
  saveUpdatedCharacter(updatedCharacter: Character): void {
    const index = this.characters.findIndex(character => character.id === updatedCharacter.id);
    if (index !== -1) {
      this.characters[index] = { ...updatedCharacter }; // Actualiza el personaje existente
    }
  }
}
