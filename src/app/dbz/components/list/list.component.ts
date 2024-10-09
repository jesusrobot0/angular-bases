import { DBZService } from './../../services/dbz.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() public characterList: Character[] = [
    { name: 'Thunks', power: 10, id: '' }, // Si no mandan el input, esta es la data por defecto
  ];

  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  constructor(private DBZService: DBZService) {}

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }

  onUpdateCharacter(id: string): void {
    this.DBZService.updateCharacter(id);
  }
}
