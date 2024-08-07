import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {name: "Thunks", power: 10} // Si no mandan el input, esta es la data por defecto
  ]

  @Output()
  public onDelete:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    this.onDelete.emit(index);
  }
}
