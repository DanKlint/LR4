import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFormComponent } from '../name-form/name-form.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  imports: [CommonModule, NameFormComponent]
})
export class GreetingComponent {
  greeting: string | null = null;
  userName: string = '';
  namesList: string[] = ['Дружище', 'Боб', 'Пимагуль', 'Ваше величество', 'Данёк'];

  onNameSubmitted(name: string) {
    this.greeting = `Привет, ${name}!`;
    this.userName = name;
  }

  getRandomName(): void {
    const randomIndex = Math.floor(Math.random() * this.namesList.length);
    this.userName = this.namesList[randomIndex];
    this.onNameSubmitted(this.userName);
  }
}


