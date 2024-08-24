import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  // Los getters son una propiedades, que se ve como las propiedades
  // pero que realmente son métodos, por que devuelven un dato procesado
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 24;
  }

  reset(): void {
    this.name = 'iron man';
    this.age = 45;
  }
}
