import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programación reactiva

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrl: './mediaplayer.component.css'
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: '',
    album: '',
    name: '',
    url: '',
    _id: ''
  }

  listObservers: Array<Subscription> = []

  constructor(private _multimediaService: MultimediaService) {

  }

  ngOnInit(): void {
    const observer1: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {

      }
    )

    this.listObservers = [observer1];
  }

  ngOnDestroy(): void {
    // Que se desuscriba cuando se destruya el componente
    this.listObservers.forEach(u => u.unsubscribe());
  }
}
