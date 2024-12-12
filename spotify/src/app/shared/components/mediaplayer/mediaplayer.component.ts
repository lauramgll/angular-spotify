import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programación reactiva

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrl: './mediaplayer.component.css'
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover!: TrackModel;

  listObservers: Array<Subscription> = [];
  state: string = 'paused';

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  constructor(public _multimediaService: MultimediaService) {

  }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.playerStatus$
    .subscribe(status => this.state = status);

    this.listObservers = [observer1$];

    /*
    this._multimediaService.trackInfo$.subscribe(res => {
      console.log('Debo reproducir esta canción', res);
    });
    */

    /*
    const observer1: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {

      }
    )

    this.listObservers = [observer1];
    */

    /*
    const observable1$ = this._multimediaService.myObservable1$.subscribe(
      (responseOk) => {
        // next()
        console.log(responseOk);
      }, 
      (responseFail) => {
        // error()
        console.log(responseFail);
      }
    );
    */
  }

  ngOnDestroy(): void {
    // Que se desuscriba cuando se destruya el componente
    this.listObservers.forEach(u => u.unsubscribe());
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event; // Saca la coordenada x donde hace clic el usuario
    const { x, width } = elNative.getBoundingClientRect(); // Esa función extrae el x y el width del tamaño del elemento
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    console.log(`Click(x): ${percentageFromX}`);
    this._multimediaService.seekAudio(percentageFromX);
  }
}
