import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  // mockTracksList: Array<TrackModel> = [];

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private _trackService: TrackService) {

  }

  ngOnInit(): void {
    /*
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
    */
    this.loadDataAll();
    this.loadDataRandom();
  }

  // Los Observables también se pueden manejar como promesas
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this._trackService.getAllTracks$().toPromise();
  }

  loadDataRandom(): void {
    this._trackService.getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });
  }

  ngOnDestroy(): void {

  }
}
