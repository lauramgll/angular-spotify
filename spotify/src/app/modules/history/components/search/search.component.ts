import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src: string = '';

  callSearch(term: string): void {
    // Hacemos la petición a la api a partir de que hayamos escrito al menos 3 letras en el buscador
    if (term.length >= 3) {
      this.callbackData.emit(term)
      console.log('🔴 Llamamos a nuestra API HTTP GET---> ', term);
    }
  }
}
