import { Component, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-form',
  standalone: true,
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css'],
  imports: [FormsModule, CommonModule]
})
export class NameFormComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() userName: string = ''; // Входное свойство
  errorMessage: string | null = null;

  @Output() nameSubmitted = new EventEmitter<string>();

  submitName() {
    if (this.userName.trim() === '') {
      this.errorMessage = 'Please enter your name.';
    } else {
      this.errorMessage = null;
      this.nameSubmitted.emit(this.userName);
    }
  }

  ngOnInit(): void { console.log('ngOnInit - NameFormComponent инициализирован'); }
  ngOnChanges(changes: SimpleChanges): void { console.log('ngOnChanges - изменения в свойствах NameFormComponent:', changes); }
  ngDoCheck(): void { console.log('ngDoCheck - выполняется проверка изменений в NameFormComponent'); }
  ngAfterContentInit(): void { console.log('ngAfterContentInit - контент NameFormComponent инициализирован'); }
  ngAfterContentChecked(): void { console.log('ngAfterContentChecked - проверка изменений контента NameFormComponent завершена'); }
  ngAfterViewInit(): void { console.log('ngAfterViewInit - представление NameFormComponent инициализировано'); }
  ngAfterViewChecked(): void { console.log('ngAfterViewChecked - проверка представления NameFormComponent завершена'); }
  ngOnDestroy(): void { console.log('ngOnDestroy - NameFormComponent уничтожается'); }
}



