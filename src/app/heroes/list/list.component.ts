import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = [
    'Iron Man',
    'Thor',
    'Hulk',
    'Black Widow',
    'Capitán America',
    'El Hombre Hormiga',
    'Spider Man',
  ];
  public deletedHero: string = '';

  removeLastHero(): void {
    const deletedHero = this.heroesNames.pop();
    this.deletedHero = deletedHero as string;
  }
}
