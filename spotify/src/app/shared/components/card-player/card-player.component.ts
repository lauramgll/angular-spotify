import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(private _multimediaService: MultimediaService) {

  }

  sendPlay(track: TrackModel): void {
    // Enviando canción al reproductor
    // this._multimediaService.callback.emit(track);

    // Envia la info de la canción a través del BehaviourSubject del multimediaService
    this._multimediaService.trackInfo$.next(track);
  }
}
