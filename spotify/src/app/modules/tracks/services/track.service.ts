import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // $ buenas prácticas para indicar que es un Observable
  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<TrackModel[]> = of([]);

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any) => {
        return dataRaw.data;
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any) => { // Devolvemos lista revertida
        return dataRaw.data.reverse();
      }),
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo pasó', [status, statusText]);
        return of([])
      })
    );
  }
}
