import { Component, EventEmitter, Output } from '@angular/core';

import { v4 as uuid } from "uuid";

/* ********** INTERFACES ********** */
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {id: "", name: "", power: 0}

  emitCharacter():void {
    if (this.character.name === "") return;
    if (this.character.power < 0) return;

    const newCharacterWithId = {...this.character, id: uuid()}

    this.onNewCharacter.emit(newCharacterWithId);

    this.character = { id: "", name: "", power: 0}
  }
}
