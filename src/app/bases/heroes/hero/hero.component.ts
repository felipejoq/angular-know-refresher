import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Superman';
  public age: number = 30;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  public changeName(newName: string): void {
    this.name = newName;
  }

  public changeAge(newAge: number): void {
    this.age = newAge;
  }

  public reset(): void {
    this.name = 'Superman';
    this.age = 30;
  }
}
