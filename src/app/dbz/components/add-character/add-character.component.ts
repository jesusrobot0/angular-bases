import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { v4 as uuid } from "uuid";

import { DBZService } from '../../services/dbz.service';


/* ********** INTERFACES ********** */
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent implements OnInit {
  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {id: "", name: "", power: 0}
  private subscription: Subscription = new Subscription();

  constructor(private dbzService: DBZService) {}


  ngOnInit(): void {
    // Suscríbete a los cambios del personaje seleccionado
    this.subscription = this.dbzService.selectedCharacter$.subscribe(
      (character) => {
        this.character = { ...character }; // Actualiza el formulario con el personaje seleccionado
      }
    );
  }

  emitCharacter():void {
    if (this.character.name === "") return;
    if (this.character.power < 0) return;

    if (this.character.id) {
      // Si hay un ID, actualiza el personaje existente
      this.dbzService.saveUpdatedCharacter(this.character);
    } else {
      // Si no hay ID, crea un nuevo personaje
      const newCharacterWithId = { ...this.character, id: uuid() };
      this.onNewCharacter.emit(newCharacterWithId);
    }

    this.character = { id: "", name: "", power: 0}
  }
}
